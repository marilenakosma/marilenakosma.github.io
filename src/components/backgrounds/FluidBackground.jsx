import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// --- SHADERS (From shaders.jsx, with syntax fixes) ---
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`;
const fluidShader = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec4 iMouse;
uniform int iFrame;
uniform sampler2D iPreviousFrame;
uniform float uBrushSize;
uniform float uBrushStrength;
uniform float uFluidDecay;
uniform float uTrailLength;
uniform float uStopDecay;
varying vec2 vUv;
vec2 ur,U;
float ln(vec2 p,vec2 a,vec2 b) {
   return length(p-a-(b-a)*clamp(dot(p-a,b-a)/dot(b-a,b-a),0.,1.));
}
vec4 t(vec2 v,int a,int b) {
   return texture2D(iPreviousFrame, fract((v+vec2(float(a),float(b)))/ur));
}
vec4 t(vec2 v) {
   return texture2D(iPreviousFrame,fract(v/ur));
}
float area(vec2 a, vec2 b, vec2 c) {
  float A = length(b-c), B = length(c-a), C = length(a-b),
  s=0.5*(A+B+C);
  return sqrt(s*(s-A)*(s-B)*(s-C));
}
void main() {
  U = vUv * iResolution;
  ur = iResolution.xy;
  if (iFrame < 1) {
    float w = 0.5+sin(0.2*U.x)*0.5;
    float q = length(U-0.5*ur);
    gl_FragColor = vec4(0.1*exp(-0.001*q*q),0,0,w);
  } else {
    vec2 v = U,
         A = v + vec2( 1,  1),
         B = v + vec2( 1, -1),
         C = v + vec2(-1,  1),
         D = v + vec2(-1, -1);
    
    for (int i=0; i<8; i++) {
        v -= t(v).xy;
        A -= t(A).xy;
        B -= t(B).xy;
        C -= t(C).xy;   
    }
    vec4 me = t(v);
    vec4 n = t(v, 0, 1),
         e = t(v, 1, 0),
         s = t(v, 0, -1),
         w = t(v, -1, 0);
         
    vec4 ne = .25*(n+e+s+w);
    me = mix(t(v), ne, vec4(0.15,0.15,0.95,0.));
    me.z = me.z - 0.01*((area(A,B,C) + area(B,C,D))-4.);
    vec4 pr = vec4(e.z,w.z,n.z,s.z);
    me.xy = me.xy + 100.*vec2(pr.x-pr.y,pr.z-pr.w)/ur;
    me.xy *= uFluidDecay;
    me.z  *= uTrailLength;
    if(iMouse.z > 0.0) {
       vec2 mousePos = iMouse.xy;
       vec2 mousePrev = iMouse.zw;
       vec2 mouseVel = mousePos - mousePrev;
       float velMagnitude = length(mouseVel);
       float q = ln(U, mousePos, mousePrev);
       vec2 m = mousePos - mousePrev;
       float l = length(m);
       if (l > 0.0) m = min(l,10.0) * m / l;
       float brushSizeFactor = 1e-4 / uBrushSize; // FIXED: ie-4 to 1e-4
       float strengthFactor = 0.03 * uBrushStrength;
       float falloff = exp(-brushSizeFactor*q*q*q);
       falloff = pow(falloff,0.5);
       me.xyw += strengthFactor * falloff * vec3(m,10.);
       if(velMagnitude < 2.0) {
         float distToCursor = length(U - mousePos);
         float influence = exp(-distToCursor * 0.01);
         float cursorDecay = mix(1.0, uStopDecay,influence);
         me.xy *= cursorDecay;
         me.z *= cursorDecay;
       }
    }
    gl_FragColor = clamp(me, -0.4, 0.4); // FIXED: Added missing semicolon
  }
}
`;
const displayShader = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iFluid;
uniform float uDistortionAmount;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uColorIntensity;
uniform float uSoftness;
varying vec2 vUv;
void main() {
  vec2 fragCoord = vUv * iResolution;
  vec4 fluid = texture2D(iFluid, vUv);
  vec2 fluidVel = fluid.xy;
  float mr = min(iResolution.x, iResolution.y);
  vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;
  uv += fluidVel * (0.5 * uDistortionAmount);
  float d = -iTime * 0.5;
  float a = 0.0;
  for(float i = 0.0; i < 8.0; ++i) {
   a += cos(i - d - a * uv.x);
   d += sin(uv.y * i + a);
  }
   d += iTime * 0.5;
   float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
   float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
   float mixer3 = sin(d + a) * 0.5 + 0.5;
   float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
   mixer1 = mix(mixer1,0.5,smoothAmount);
   mixer2 = mix(mixer2,0.5,smoothAmount);
   mixer3 = mix(mixer3,0.5,smoothAmount);
   vec3 col = mix(uColor1,uColor2,mixer1);
   col = mix(col,uColor3,mixer2);
   col = mix(col,uColor4,mixer3 * 0.4);
   col *= uColorIntensity;
   gl_FragColor = vec4(col,1.0);
}
`;
// --- COMPONENT LOGIC ---
const defaultConfig = {
    brushSize: 25.0,
    brushStrength: 0.5,
    distortionAmount: 2.5,
    fluidDecay: 0.98,
    trailLength: 0.8,
    stopDecay: 0.85,
    color1: "#92b7b3ff",
    color2: "#a2b9d6ff",
    color3: "#0133ff",
    color4: "#221636ff",
    colorIntensity: 1.0,
    softness: 1.0,
};
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
}
export default function FluidBackground({ config = defaultConfig, onWebGLUnsupported, ...rest }) {
    const mountRef = useRef(null);
    useEffect(() => {
        if (!mountRef.current) return;
        // Check WebGL Support (Fallback gracefully)
        const testCanvas = document.createElement('canvas');
        const glContext = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
        if (!glContext) {
            onWebGLUnsupported?.();
            return;
        }
        const container = mountRef.current;
        let animationFrameId;
        // --- Setup Three.js ---
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        // Render Targets for Fluid Simulation Feedback Loop
        const targetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        };
        const fluidTarget1 = new THREE.WebGLRenderTarget(container.clientWidth, container.clientHeight, targetOptions);
        const fluidTarget2 = new THREE.WebGLRenderTarget(container.clientWidth, container.clientHeight, targetOptions);
        let currentFluidTarget = fluidTarget1;
        let previousFluidTarget = fluidTarget2;
        let frameCount = 0;
        // Materials
        const fluidMaterial = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
                iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
                iFrame: { value: 0 },
                iPreviousFrame: { value: null },
                uBrushSize: { value: config.brushSize },
                uBrushStrength: { value: config.brushStrength },
                uFluidDecay: { value: config.fluidDecay },
                uTrailLength: { value: config.trailLength },
                uStopDecay: { value: config.stopDecay },
            },
            vertexShader,
            fragmentShader: fluidShader,
        });
        const displayMaterial = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
                iFluid: { value: null },
                uDistortionAmount: { value: config.distortionAmount },
                uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
                uColor2: { value: new THREE.Vector3(...hexToRgb(config.color2)) },
                uColor3: { value: new THREE.Vector3(...hexToRgb(config.color3)) },
                uColor4: { value: new THREE.Vector3(...hexToRgb(config.color4)) },
                uColorIntensity: { value: config.colorIntensity },
                uSoftness: { value: config.softness },
            },
            vertexShader,
            fragmentShader: displayShader,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const fluidPlane = new THREE.Mesh(geometry, fluidMaterial);
        const displayPlane = new THREE.Mesh(geometry, displayMaterial);
        // Mouse Events
        let mouseX = 0, mouseY = 0, prevMouseX = 0, prevMouseY = 0;
        let lastMoveTime = 0;
        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            prevMouseX = mouseX;
            prevMouseY = mouseY;
            mouseX = e.clientX - rect.left;
            mouseY = rect.height - (e.clientY - rect.top);
            lastMoveTime = performance.now();
            fluidMaterial.uniforms.iMouse.value.set(mouseX, mouseY, prevMouseX, prevMouseY);
        };
        const handleMouseLeave = () => {
            fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
        };
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        // Resize Event
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            fluidMaterial.uniforms.iResolution.value.set(width, height);
            displayMaterial.uniforms.iResolution.value.set(width, height);
            fluidTarget1.setSize(width, height);
            fluidTarget2.setSize(width, height);
            frameCount = 0;
        };
        window.addEventListener("resize", handleResize);
        // Animation Loop
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const time = performance.now() * 0.001;
            fluidMaterial.uniforms.iTime.value = time;
            displayMaterial.uniforms.iTime.value = time;
            fluidMaterial.uniforms.iFrame.value = frameCount;
            if (performance.now() - lastMoveTime > 100) {
                fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
            }
            // Sync config uniform updates
            fluidMaterial.uniforms.uBrushSize.value = config.brushSize;
            fluidMaterial.uniforms.uBrushStrength.value = config.brushStrength;
            fluidMaterial.uniforms.uFluidDecay.value = config.fluidDecay;
            fluidMaterial.uniforms.uTrailLength.value = config.trailLength;
            fluidMaterial.uniforms.uStopDecay.value = config.stopDecay;
            displayMaterial.uniforms.uDistortionAmount.value = config.distortionAmount;
            displayMaterial.uniforms.uColorIntensity.value = config.colorIntensity;
            displayMaterial.uniforms.uSoftness.value = config.softness;
            displayMaterial.uniforms.uColor1.value.set(...hexToRgb(config.color1));
            displayMaterial.uniforms.uColor2.value.set(...hexToRgb(config.color2));
            displayMaterial.uniforms.uColor3.value.set(...hexToRgb(config.color3));
            displayMaterial.uniforms.uColor4.value.set(...hexToRgb(config.color4));
            // Pass 1: Render Fluid Dynamics
            scene.remove(displayPlane);
            scene.add(fluidPlane);
            fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture;
            renderer.setRenderTarget(currentFluidTarget);
            renderer.render(scene, camera);
            // Pass 2: Render Display
            scene.remove(fluidPlane);
            scene.add(displayPlane);
            displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture;
            renderer.setRenderTarget(null); // Render to canvas
            renderer.render(scene, camera);
            // Swap targets for the feedback loop
            const temp = currentFluidTarget;
            currentFluidTarget = previousFluidTarget;
            previousFluidTarget = temp;
            frameCount++;
        };
        animate();
        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            // Dispose WebGL context assets
            geometry.dispose();
            fluidMaterial.dispose();
            displayMaterial.dispose();
            fluidTarget1.dispose();
            fluidTarget2.dispose();
            renderer.dispose();
        };
    }, [config, onWebGLUnsupported]);
    return <div ref={mountRef} className="w-full h-full" {...rest} />;
}