import React from "react";
import html from "../../../assets/Course/1.png";
import design from "../../../assets/Course/2.png";
import business from "../../../assets/Course/3.png";
import business2 from "../../../assets/Course/4.png";

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
    <div className="bg-[#E5E5E5] pt-[100px] pb-[147px]">
      <div className="">
        <div className="widthClass">
          <h2 className="heading">
            Most <span className="color-heading">Popular Course</span>
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
                  <div className="popular-card-div ">
                    <img src={html} alt="" />
                    <div className=" mt-[16px] ">
                      <h2 className="">Various versions have evolved daf</h2>
                      <div className="flex flex-row mt-[20.24px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                            fill="#FFC27A"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                            fill="#FFC27A"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                            fill="#FFC27A"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                            fill="#FFC27A"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                            fill="#FFC27A"
                          />
                        </svg>
                        <p> (15)</p>
                      </div>
                      <hr className="mt-[21px]" />
                      <p className="pb-[22px] pt-[22px]">$ 500</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-div ">
                    <img src={design} alt="" />
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
                    <img src={business} alt="" />
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
                    <img src={business2} alt="" />
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
                    <img src={html} alt="" />
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
                    <img src={design} alt="" />
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
                    <img src={business} alt="" />
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
                    <img src={business2} alt="" />
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

export default PopularCategory;
