import React from 'react';
import styled from 'styled-components';

interface CardProps {
  line1?: string;
  line2?: string;
  line3?: string;
  author?: string;
}

const Card: React.FC<CardProps> = ({
  line1 = 'I bridge the gap',
  line2 = 'between UI/UX',
  line3 = 'and code',
  author = 'Marilena Kosma',
}) => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 614 390" height={390} width={614}>
        <g id="Frame">
          <g id="box-figma">
            <text
              id="text"
              fill="#F9F9F9"
              fontFamily="'Montserrat', sans-serif"
              fontSize="55"
              fontWeight="600"
            >
              <tspan x="57" y="105">{line1}</tspan>
              <tspan x="57" y="191">{line2}</tspan>
              <tspan x="57" y="277">{line3}</tspan>
            </text>
            <g id="box">
              <path strokeWidth={2} stroke="#2563EB" fillOpacity="0.05" fill="#2563EB" d="M587 20H28V306H587V20Z" id="figny9-box" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M33 15H23V25H33V15Z" id="figny9-adjust-1" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M33 301H23V311H33V301Z" id="figny9-adjust-3" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M592 301H582V311H592V301Z" id="figny9-adjust-4" />
              <path strokeWidth={2} stroke="#2563EB" fill="white" d="M592 15H582V25H592V15Z" id="figny9-adjust-2" />
            </g>
            <g id="cursor">
              <path strokeWidth={2} stroke="white" fill="#2563EB" d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z" id="Vector 273" />
              <rect x="470" y="343" width="126" height="33" rx="4" fill="#2563EB" id="Rectangle 786" />
              <text
                id="author"
                x="478"
                y="364.5"
                fill="white"
                fontFamily="'Montserrat', sans-serif"
                fontSize="13"
                fontWeight="400"
              >
                {author}
              </text>
            </g>
          </g>
        </g>
      </svg>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #cursor,
  #box,
  #text {
    cursor: pointer;
  }
  #text,
  #author {
    user-select: none;
    font-family: 'Montserrat', sans-serif;
  }
  #cursor {
    overflow: visible;
    transform: translate3d(300px, 0, 0) scale(1);
    transform-origin: center center;
    transform-box: fill-box;
    animation: cursor 5s ease infinite alternate;
  }
  @keyframes cursor {
    0% {
      opacity: 0;
      transform: translate3d(300px, 0, 0) scale(1);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    60% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    /* clique */
    65% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(0.95);
    }
    70% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    100% {
      opacity: 1;
      transform: translate3d(-300px, -50px, 0) scale(1);
    }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
    display:flex;
    flex:row;
    justify-content:center;
  }
  @keyframes box {
    0%,
    60% {
      opacity: 0;
    }
    65%,
    100% {
      opacity: 1;
    }
  }
`;

export default Card;
