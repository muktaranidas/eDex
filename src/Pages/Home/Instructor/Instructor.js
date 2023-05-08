import React from "react";
import instructor1 from "../../../assets/instructor/1.png";
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

        <div className="flex flex-row justify-center items-center">
          <button className="prev   pr-[16px] ">
            <ArrowLeft></ArrowLeft>
          </button>
          <div className="widthClass">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              // spaceBetween={}
              slidesPerView={4}
              navigation={{ prevEl: ".prev", nextEl: ".next" }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className=" grid grid-cols-1 gap-[24px]  lg:grid-cols-4">
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
                    <img src={instructor1} alt="" />
                    <div className="text-center mt-[16px] ">
                      <h2 className="instructor-name ">Jacob Jones</h2>
                      <span className="instructor-position">
                        UI-UX Design Expart
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                .....
              </div>
            </Swiper>
          </div>
          <button className="next  pl-[16px] ">
            <ArrowLeft></ArrowLeft>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
