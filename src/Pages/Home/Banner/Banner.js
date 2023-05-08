import React from "react";
import img from "../../../assets/banner/banner.png";
import "./Banner.css";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <section className="bg-[#6176F7] ">
      <div className="container widthClass flex flex-col  lg:flex-row">
        <div className="flex flex-col justify-center mt-[178px]">
          <p className="banner-h4">START TO SUCCESS</p>
          <h1 className="banner-heading my-[24px]">
            Access To 5000+ Course from 300 Instructors & Institutions
          </h1>
          <p className="banner-p mb-[32px]">
            Various versions have evolved over the years, sometimesbyaccident,
          </p>
          <label className="flex relative ">
            <input
              type="email"
              placeholder="What do want to learn?"
              className="input mb-[318px]    py-[24px] pl-[32px] pr-[373px] banner-input"
            />

            <div className="absolute right-6">
              <BannerButton></BannerButton>
            </div>
          </label>
        </div>
        <div className="flex -mt-16 mb-[248px] ">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
