import React from "react";
// import html from "../../../assets/Course/1.png";
// import design from "../../../assets/Course/2.png";
// import business from "../../../assets/Course/3.png";
// import business2 from "../../../assets/Course/4.png";

import "./PopularCategory.css";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import ArrowLeft from "../../Shared/ArrowLeft/ArrowLeft";
import ArrowRight from "../../Shared/ArrowRight/ArrowRight";
// import "swiper/css/scrollbar";

const PopularCategory = () => {
  return (
    <div className="bg-[#F3F4F5] pt-[100px] pb-[100px]">
      <div className="widthClass">
        <div className="">
          <h2 className="heading">
            Most <span className="color-heading">Popular Category</span>
          </h2>
          <p className="paragraph-tag pb-[48px]">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <div className="container grid grid-cols-1 gap-[24px] mx-auto lg:grid-cols-4">
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2188 23.75C18.8583 23.75 20.1875 22.4208 20.1875 20.7812C20.1875 19.1417 18.8583 17.8125 17.2188 17.8125C15.5792 17.8125 14.25 19.1417 14.25 20.7812C14.25 22.4208 15.5792 23.75 17.2188 23.75Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.75 33.25L15.1258 22.8743"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.75 33.25L25.457 29.8063C25.6614 29.7714 25.8529 29.6829 26.0119 29.55C26.171 29.417 26.292 29.2442 26.3625 29.0492L29.6875 20.1875L17.8125 8.3125L8.95078 11.6375C8.7555 11.7119 8.58298 11.8359 8.45023 11.9973C8.31748 12.1587 8.22908 12.3519 8.19375 12.5578L4.75 33.25Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6875 20.1875L33.5914 16.2836C33.7036 16.1731 33.7927 16.0414 33.8535 15.8961C33.9143 15.7509 33.9457 15.595 33.9457 15.4375C33.9457 15.28 33.9143 15.1241 33.8535 14.9789C33.7927 14.8336 33.7036 14.7019 33.5914 14.5914L23.4086 4.40859C23.2981 4.29638 23.1664 4.20728 23.0211 4.14646C22.8759 4.08564 22.72 4.05432 22.5625 4.05432C22.405 4.05432 22.2491 4.08564 22.1039 4.14646C21.9586 4.20728 21.8269 4.29638 21.7164 4.40859L17.8125 8.31249"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="category-type">Design</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8125 26.125H13.0625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4375 32.0625V26.125"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.34375 26.125V32.0625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 26.125V32.0625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.34375 29.0938H9.5"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.4688 26.125V32.0625H35.0312"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.375 32.0625V26.125L24.3438 30.2812L27.3125 26.125V32.0625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.125 20.1875V5.9375C7.125 5.62256 7.25011 5.32051 7.47281 5.09781C7.69551 4.87511 7.99756 4.75 8.3125 4.75H22.5625L30.875 13.0625V20.1875"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5625 4.75V13.0625H30.875"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Department</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9375 22.5625C30.1842 22.5625 34.4375 18.3092 34.4375 13.0625C34.4375 7.81579 30.1842 3.5625 24.9375 3.5625C19.6908 3.5625 15.4375 7.81579 15.4375 13.0625C15.4375 18.3092 19.6908 22.5625 24.9375 22.5625Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.6618 19.7867L18.2134 6.33826"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8438 23.1562L13.0625 24.9375"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5563 14.532L4.17111 30.0585C3.99997 30.2864 3.91764 30.5687 3.93949 30.8528C3.96134 31.1369 4.08589 31.4033 4.28986 31.6023L6.39768 33.7101C6.59664 33.9141 6.86307 34.0386 7.14717 34.0605C7.43127 34.0823 7.71361 34 7.94143 33.8289L23.468 22.4437"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Marketing</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0625 10.6875H5.9375C5.28166 10.6875 4.75 11.2192 4.75 11.875V30.875C4.75 31.5308 5.28166 32.0625 5.9375 32.0625H32.0625C32.7183 32.0625 33.25 31.5308 33.25 30.875V11.875C33.25 11.2192 32.7183 10.6875 32.0625 10.6875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.9375 10.6875V8.3125C24.9375 7.68261 24.6873 7.07852 24.2419 6.63312C23.7965 6.18772 23.1924 5.9375 22.5625 5.9375H15.4375C14.8076 5.9375 14.2035 6.18772 13.7581 6.63312C13.3127 7.07852 13.0625 7.68261 13.0625 8.3125V10.6875"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33.25 18.7477C28.919 21.2525 24.0031 22.5685 19 22.5625C13.9959 22.5755 9.07825 21.259 4.75 18.7477"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2188 17.8125H20.7812"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Business</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7751 8.75781L12.6321 6.01172"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.38281 16.1501L3.63672 15.0071"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.6172 16.1501L34.3633 15.0071"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.225 8.75781L25.3679 6.01172"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.625 23.75H2.375"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.875 29.6875H7.125"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4203 23.75C10.0518 22.4268 9.99429 21.0364 10.2523 19.6873C10.5103 18.3383 11.0769 17.0672 11.9076 15.9734C12.7384 14.8796 13.8109 13.9928 15.0412 13.3823C16.2716 12.7718 17.6265 12.4541 19 12.4541C20.3735 12.4541 21.7284 12.7718 22.9588 13.3823C24.1891 13.9928 25.2616 14.8796 26.0924 15.9734C26.9232 17.0672 27.4897 18.3383 27.7477 19.6873C28.0057 21.0364 27.9482 22.4268 27.5797 23.75"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Lifestyle</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.875 30.875H7.125C6.49511 30.875 5.89102 30.6248 5.44562 30.1794C5.00022 29.734 4.75 29.1299 4.75 28.5V11.875C4.75 11.2451 5.00022 10.641 5.44562 10.1956C5.89102 9.75022 6.49511 9.5 7.125 9.5H11.875L14.25 5.9375H23.75L26.125 9.5H30.875C31.5049 9.5 32.109 9.75022 32.5544 10.1956C32.9998 10.641 33.25 11.2451 33.25 11.875V28.5C33.25 29.1299 32.9998 29.734 32.5544 30.1794C32.109 30.6248 31.5049 30.875 30.875 30.875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 24.9375C21.9513 24.9375 24.3438 22.545 24.3438 19.5938C24.3438 16.6425 21.9513 14.25 19 14.25C16.0487 14.25 13.6562 16.6425 13.6562 19.5938C13.6562 22.545 16.0487 24.9375 19 24.9375Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Photography</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0625 33.25C16.3417 33.25 19 30.5917 19 27.3125C19 24.0333 16.3417 21.375 13.0625 21.375C9.78331 21.375 7.125 24.0333 7.125 27.3125C7.125 30.5917 9.78331 33.25 13.0625 33.25Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 27.3125V5.9375L30.875 9.5V16.625L19 13.0625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Music</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19C26.2142 19 32.0625 15.81 32.0625 11.875C32.0625 7.93997 26.2142 4.75 19 4.75C11.7858 4.75 5.9375 7.93997 5.9375 11.875C5.9375 15.81 11.7858 19 19 19Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.9375 11.875V19C5.9375 22.9336 11.7859 26.125 19 26.125C26.2141 26.125 32.0625 22.9336 32.0625 19V11.875"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.9375 19V26.125C5.9375 30.0586 11.7859 33.25 19 33.25C26.2141 33.25 32.0625 30.0586 32.0625 26.125V19"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Data Science</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0625 34.4375H24.9375"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.682 24.7891C10.2683 23.6899 9.1233 22.2833 8.33376 20.6759C7.54423 19.0685 7.13087 17.3026 7.125 15.5118C7.09532 9.06957 12.2758 3.71098 18.718 3.56254C21.2112 3.50344 23.6598 4.23081 25.7164 5.64151C27.7731 7.0522 29.3334 9.0746 30.176 11.4219C31.0187 13.7692 31.1009 16.3222 30.4111 18.7188C29.7213 21.1155 28.2944 23.2341 26.3328 24.7743C25.8995 25.1092 25.5485 25.5388 25.3067 26.0302C25.0648 26.5216 24.9386 27.0617 24.9375 27.6094V28.5C24.9375 28.815 24.8124 29.117 24.5897 29.3397C24.367 29.5624 24.0649 29.6875 23.75 29.6875H14.25C13.9351 29.6875 13.633 29.5624 13.4103 29.3397C13.1876 29.117 13.0625 28.815 13.0625 28.5V27.6094C13.0588 27.0659 12.9328 26.5301 12.6938 26.0419C12.4548 25.5537 12.109 25.1255 11.682 24.7891V24.7891Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.2024 8.43127C21.6538 8.67731 22.993 9.36777 24.0353 10.4074C25.0775 11.447 25.7714 12.7844 26.0211 14.2352"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type-special ">PersonalDevelop</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 19H10.6875L13.0625 15.4375L17.8125 22.5625L20.1875 19H23.75"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.17109 14.25C4.15625 14.057 4.15625 13.8492 4.15625 13.6563C4.15625 11.8719 4.77448 10.1426 5.90577 8.76266C7.03705 7.38272 8.61149 6.43735 10.3612 6.0874C12.111 5.73746 13.9279 6.00455 15.5029 6.84323C17.0779 7.68192 18.3137 9.04039 19 10.6875V10.6875C19.6863 9.04039 20.9221 7.68192 22.4971 6.84323C24.0721 6.00455 25.889 5.73746 27.6388 6.0874C29.3885 6.43735 30.963 7.38272 32.0942 8.76266C33.2255 10.1426 33.8438 11.8719 33.8438 13.6563C33.8438 23.75 19 32.0625 19 32.0625C19 32.0625 13.0773 28.7375 8.71328 23.75"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Health & Fitness </p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 22.5625C20.9675 22.5625 22.5625 20.9675 22.5625 19C22.5625 17.0325 20.9675 15.4375 19 15.4375C17.0325 15.4375 15.4375 17.0325 15.4375 19C15.4375 20.9675 17.0325 22.5625 19 22.5625Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 11.875C16.2175 11.875 17.8125 10.28 17.8125 8.3125C17.8125 6.34499 16.2175 4.75 14.25 4.75C12.2825 4.75 10.6875 6.34499 10.6875 8.3125C10.6875 10.28 12.2825 11.875 14.25 11.875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6875 19C31.655 19 33.25 17.405 33.25 15.4375C33.25 13.47 31.655 11.875 29.6875 11.875C27.72 11.875 26.125 13.47 26.125 15.4375C26.125 17.405 27.72 19 29.6875 19Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6875 30.875C31.655 30.875 33.25 29.28 33.25 27.3125C33.25 25.345 31.655 23.75 29.6875 23.75C27.72 23.75 26.125 25.345 26.125 27.3125C26.125 29.28 27.72 30.875 29.6875 30.875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.3125 32.0625C10.28 32.0625 11.875 30.4675 11.875 28.5C11.875 26.5325 10.28 24.9375 8.3125 24.9375C6.34499 24.9375 4.75 26.5325 4.75 28.5C4.75 30.4675 6.34499 32.0625 8.3125 32.0625Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5603 15.7492L15.6899 11.5632"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.303 16.5657L22.3843 17.8719"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.882 25.1304L21.8054 21.182"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.3429 21.3601L10.9695 26.1398"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Finance</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between bg-[#FFFFFF] popular-card-div">
            <div className="flex items-center gap-[16px] justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2812 30.875C13.5767 30.875 15.4375 29.0142 15.4375 26.7188C15.4375 24.4233 13.5767 22.5625 11.2812 22.5625C8.98582 22.5625 7.125 24.4233 7.125 26.7188C7.125 29.0142 8.98582 30.875 11.2812 30.875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.7188 30.875C29.0142 30.875 30.875 29.0142 30.875 26.7188C30.875 24.4233 29.0142 22.5625 26.7188 22.5625C24.4233 22.5625 22.5625 24.4233 22.5625 26.7188C22.5625 29.0142 24.4233 30.875 26.7188 30.875Z"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4375 26.7188H22.5625"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1875 17.8125H36.8125"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.9375 17.8126L13.2555 7.36256C13.3657 7.20418 13.5129 7.07506 13.6843 6.98637C13.8557 6.89768 14.0461 6.85209 14.2391 6.85355C14.432 6.85501 14.6217 6.90348 14.7918 6.99476C14.9618 7.08603 15.107 7.21737 15.2148 7.3774L18.0055 11.5782C18.1134 11.7436 18.2608 11.8794 18.4345 11.9735C18.6081 12.0675 18.8025 12.1168 19 12.1168C19.1975 12.1168 19.3919 12.0675 19.5655 11.9735C19.7392 11.8794 19.8866 11.7436 19.9945 11.5782L22.7852 7.3774C22.893 7.21737 23.0382 7.08603 23.2082 6.99476C23.3783 6.90348 23.568 6.85501 23.7609 6.85355C23.9539 6.85209 24.1443 6.89768 24.3157 6.98637C24.4871 7.07506 24.6343 7.20418 24.7445 7.36256L32.0625 17.8126"
                  stroke="#6D737A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="category-type">Teaching</p>
            </div>
            <div className="flex items-center justify-between ">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28L28 16"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.25 16H28V25.75"
                  stroke="#FFC27A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
