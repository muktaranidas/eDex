import React from "react";
import img from "../../../assets/banner/banner.png";
import "./Banner.css";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <section className="bg-[#6176F7] ">
      <div className="container widthClass flex flex-col  lg:flex-row">
        <div className="flex  flex-col justify-center  mt-[178px]  mb-[318px]">
          <p className="banner-h4">START TO SUCCESS</p>
          <h1 className="banner-heading my-[24px]">
            Access To{" "}
            <div className="inline-block">
              <p>5000+</p>
              <svg
                width="174"
                height="13"
                viewBox="0 0 174 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45993 6.25926C30.6873 3.00197 103.952 -0.668661 171.192 10.7072"
                  stroke="#FFC27A"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Courses from{" "}
            <div className="inline-block">
              <p>300+</p>
              <svg
                width="112"
                height="13"
                viewBox="0 0 112 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99687 6.06247C20.8995 2.99745 67.2665 -0.447418 109.514 10.2932"
                  stroke="#FFC27A"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>{" "}
            Instructors & Institutions
          </h1>
          <p className="banner-p mb-[32px]">
            Various versions have evolved over the years, sometimesbyaccident,
          </p>

          <label className="flex relative label ">
            <input
              type="email"
              placeholder="What do want to learn?"
              className="input  focus:outline-none focus:ring focus:ring-[#ffc27a]
              ] py-[24px] pl-[32px] pr-[373px] banner-input"
            />

            <div className="absolute right-0">
              <BannerButton></BannerButton>
            </div>
          </label>
        </div>
        <div className="flex    -mt-24 mb-[248px] ">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
