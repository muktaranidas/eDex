import React from "react";
import img from "../../../assets/about/about.png";
import "./About.css";
import Button from "../../Shared/Button/Button";

const About = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div>
        <div className="container  widthClass flex flex-col  mx-auto  lg:flex-row lg:justify-between">
          <div className="flex  mt-[23px] mb-[95px] ">
            <img src={img} alt="" />
          </div>

          <div className="flex flex-col mt-[152px] mb-[153px]  ml-[85px]  text-center  lg:text-left">
            <h1 className="about-heading">
              Join <span className="about-heading-style">World's largest</span>{" "}
              learning platform today
            </h1>
            <p className="about-h4 my-[24px]">
              Start learning by registering for free
            </p>
            <p className="about-p mb-[37px]">
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
              feugiat auctor felis.
            </p>
            <Button btnText={"Sign for Free"}></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
