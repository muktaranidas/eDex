import React from "react";
import instructor1 from "../../../assets/instructor/1.png";
import instructor2 from "../../../assets/instructor/2.png";
import instructor3 from "../../../assets/instructor/3.png";
import instructor4 from "../../../assets/instructor/4.png";
import "./Instructor.css";

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

const Instructor = () => {
  return (
    <div className="bg-[#E5E5E5] pt-[100px] pb-[147px]">
      <div className="">
        <div className="widthClass">
          <h2 className="heading">
            Our Best <span className="color-heading">Instructor</span>
          </h2>
          <p className="paragraph-tag">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <div className="flex flex-row justify-center w-[1440px] mx-auto items-center">
          <button className="prev   text-white  pr-[16px] ">
            <ArrowLeft></ArrowLeft>
          </button>
          <div className="w-[1320px] ">
            <Swiper
              style={{
                "--swiper-pagination-color": "#FFC27A",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={{ prevEl: ".prev ", nextEl: ".next" }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className=" ">
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor1} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        UI-UX Design Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor2} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Social Media Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor3} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Business Idea Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor4} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Photograpy Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor1} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        UI-UX Design Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor2} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Social Media Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor3} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Business Idea Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={instructor4} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        Photograpy Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <button className="next   text-white rotate-180 pr-[16px] ">
            <ArrowRight></ArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
