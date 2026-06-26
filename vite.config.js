import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tailwindcss(),
  react(),
  ViteImageOptimizer({
    logStats: true,
    ansiColors: true,
    test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    exclude: undefined,
    include: undefined,
    includePublic: true,
    svg: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupNumericValues: false,
              cleanupIds: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
        },
        'sortAttrs',
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
          },
        },
      ],
    },
    png: {
      // https://sharp.pixelplumbing.com/api-output#png
      quality: 80,
    },
    jpeg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 80,
    },
    jpg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 80,
    },
    tiff: {
      // https://sharp.pixelplumbing.com/api-output#tiff
      quality: 80,
    },
    // gif does not support lossless compression
    // https://sharp.pixelplumbing.com/api-output#gif
    gif: {},
    webp: {
      // https://sharp.pixelplumbing.com/api-output#webp
      lossless: false,
      quality: 80,
    },
    avif: {
      // https://sharp.pixelplumbing.com/api-output#avif
      lossless: false,
      quality: 70,
    },
    cache: false,
    cacheLocation: undefined,
  }),
  ],

  assetsInclude: ['**/*.glb', '**/*.gltf']
})
