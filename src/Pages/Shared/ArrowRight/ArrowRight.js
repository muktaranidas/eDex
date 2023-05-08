import React from "react";
import "./ArrowRight.css";

const ArrowRight = () => {
  return (
    <svg
      className="hover:text-[#FFA337] "
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="22" fill="currentColor" />
      <path
        id="style-btn"
        d="M25 29.5L17.5 22L25 14.5"
        stroke="#363A3D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
