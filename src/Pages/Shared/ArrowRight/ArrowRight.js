import React from "react";

const ArrowRight = () => {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_70_832)">
        <rect
          x="24"
          y="16"
          width="44"
          height="44"
          rx="22"
          fill="url(#paint0_linear_70_832)"
          shape-rendering="crispEdges"
        />
        <path
          d="M43 30.5L50.5 38L43 45.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_70_832"
          x="0"
          y="0"
          width="84"
          height="84"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.12549 0 0 0 0 0.705882 0 0 0 0 0.52549 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_70_832"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_70_832"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_70_832"
          x1="46"
          y1="16"
          x2="46"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC27A" />
          <stop offset="1" stop-color="#FFA337" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowRight;
