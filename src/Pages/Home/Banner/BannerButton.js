import React from "react";

const BannerButton = () => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="72" rx="36" fill="white" />
      <rect width="72" height="72" rx="36" fill="url(#paint0_linear_65_460)" />
      <rect width="72" height="72" rx="36" fill="url(#paint1_linear_65_460)" />
      <path
        d="M34.875 42.75C39.2242 42.75 42.75 39.2242 42.75 34.875C42.75 30.5258 39.2242 27 34.875 27C30.5258 27 27 30.5258 27 34.875C27 39.2242 30.5258 42.75 34.875 42.75Z"
        stroke="white"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.4438 40.4437L45.0001 45"
        stroke="white"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_65_460"
          x1="36"
          y1="0"
          x2="36"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB0BA" />
          <stop offset="1" stop-color="#F9475D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_65_460"
          x1="36"
          y1="0"
          x2="36"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC27A" />
          <stop offset="1" stop-color="#FFA337" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BannerButton;
