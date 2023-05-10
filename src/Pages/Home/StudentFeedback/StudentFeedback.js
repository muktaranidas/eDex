import React from "react";
import img1 from "../../../assets/feedback/1.png";
import img2 from "../../../assets/feedback/2.png";
import img3 from "../../../assets/feedback/3.png";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./StudentFeedback.css";
import "swiper/css";
import ArrowLeft from "../../Shared/ArrowLeft/ArrowLeft";
import ArrowRight from "../../Shared/ArrowRight/ArrowRight";

const StudentFeedback = () => {
  return (
    <div className="bg-[#F8F4FF] pt-[100px] pb-[162px]">
      <div className="">
        <div className="widthClass">
          <h2 className="heading">
            Student <span className="color-heading">Feedback</span>
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
                paddingBottom: "65px",
                paddingTop: "65px",
                "--swiper-pagination-color": "#FFC27A",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={3}
              navigation={{ prevEl: ".prev ", nextEl: ".next" }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className=" ">
                <SwiperSlide>
                  <div className="feedback-card-div transition ease-in-out  delay-150  group  hover:bg-[#F096C8] duration-300 ">
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-[10px]">
                        <img src={img1} alt="" />
                        <div className="flex flex-col gap-[8px] justify-center ">
                          <p className="customer-name group-hover:text-white ">
                            Guy Hawkins
                          </p>
                          <p className="customer-position group-hover:text-white ">
                            UI-UX Designer
                          </p>
                        </div>
                      </div>
                      <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1111 0H6.66667C2.99052 0 0 2.78759 0 6.21429V10.3571C0 13.7838 2.99052 16.5714 6.66667 16.5714H11.1111C11.8246 16.5714 12.4993 16.439 13.1443 16.2444C12.2483 21.1232 7.70978 24.8571 2.22222 24.8571C0.993926 24.8571 0 25.7836 0 26.9286C0 28.0735 0.993926 29 2.22222 29C10.7987 29 17.7778 22.4945 17.7778 14.5V6.21429C17.7778 2.78759 14.7873 0 11.1111 0ZM33.3333 0H28.8889C25.2127 0 22.2222 2.78759 22.2222 6.21429V10.3571C22.2222 13.7838 25.2127 16.5714 28.8889 16.5714H33.3333C34.0468 16.5714 34.7215 16.439 35.3665 16.2444C34.4705 21.1232 29.932 24.8571 24.4444 24.8571C23.2161 24.8571 22.2222 25.7836 22.2222 26.9286C22.2222 28.0735 23.2161 29 24.4444 29C33.0209 29 40 22.4945 40 14.5V6.21429C40 2.78759 37.0095 0 33.3333 0Z"
                          fill="#FFC27A"
                        />
                      </svg>
                    </div>
                    <p className="pt-[35px] customer-feedback group-hover:text-white ">
                      Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                      pharetra. Nam sed imperdiet turpis. In hac habitasse
                      platea dictumst. Praesent nulla massa, hendrerit
                      vestibulum gravida in, feugiat auctor felis.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-div transition ease-in-out  delay-150 group  hover:bg-[#F096C8] duration-300  ">
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-[10px]">
                        <img src={img2} alt="" />
                        <div className="flex flex-col gap-[8px] justify-center ">
                          <p className="customer-name group-hover:text-white">
                            Guy Hawkins
                          </p>
                          <p className="customer-position group-hover:text-white">
                            UI-UX Designer
                          </p>
                        </div>
                      </div>
                      <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1111 0H6.66667C2.99052 0 0 2.78759 0 6.21429V10.3571C0 13.7838 2.99052 16.5714 6.66667 16.5714H11.1111C11.8246 16.5714 12.4993 16.439 13.1443 16.2444C12.2483 21.1232 7.70978 24.8571 2.22222 24.8571C0.993926 24.8571 0 25.7836 0 26.9286C0 28.0735 0.993926 29 2.22222 29C10.7987 29 17.7778 22.4945 17.7778 14.5V6.21429C17.7778 2.78759 14.7873 0 11.1111 0ZM33.3333 0H28.8889C25.2127 0 22.2222 2.78759 22.2222 6.21429V10.3571C22.2222 13.7838 25.2127 16.5714 28.8889 16.5714H33.3333C34.0468 16.5714 34.7215 16.439 35.3665 16.2444C34.4705 21.1232 29.932 24.8571 24.4444 24.8571C23.2161 24.8571 22.2222 25.7836 22.2222 26.9286C22.2222 28.0735 23.2161 29 24.4444 29C33.0209 29 40 22.4945 40 14.5V6.21429C40 2.78759 37.0095 0 33.3333 0Z"
                          fill="#FFC27A"
                        />
                      </svg>
                    </div>
                    <p className="pt-[35px] customer-feedback group-hover:text-white">
                      Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                      pharetra. Nam sed imperdiet turpis. In hac habitasse
                      platea dictumst. Praesent nulla massa, hendrerit
                      vestibulum gravida in, feugiat auctor felis.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-div group  transition ease-in-out  delay-150 hover:text-white  hover:bg-[#F096C8] duration-300 ">
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-[10px]">
                        <img src={img3} alt="" />
                        <div className="flex flex-col gap-[8px] justify-center ">
                          <p className="customer-name group-hover:text-white">
                            Guy Hawkins
                          </p>
                          <p className="customer-position group-hover:text-white">
                            UI-UX Designer
                          </p>
                        </div>
                      </div>
                      <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1111 0H6.66667C2.99052 0 0 2.78759 0 6.21429V10.3571C0 13.7838 2.99052 16.5714 6.66667 16.5714H11.1111C11.8246 16.5714 12.4993 16.439 13.1443 16.2444C12.2483 21.1232 7.70978 24.8571 2.22222 24.8571C0.993926 24.8571 0 25.7836 0 26.9286C0 28.0735 0.993926 29 2.22222 29C10.7987 29 17.7778 22.4945 17.7778 14.5V6.21429C17.7778 2.78759 14.7873 0 11.1111 0ZM33.3333 0H28.8889C25.2127 0 22.2222 2.78759 22.2222 6.21429V10.3571C22.2222 13.7838 25.2127 16.5714 28.8889 16.5714H33.3333C34.0468 16.5714 34.7215 16.439 35.3665 16.2444C34.4705 21.1232 29.932 24.8571 24.4444 24.8571C23.2161 24.8571 22.2222 25.7836 22.2222 26.9286C22.2222 28.0735 23.2161 29 24.4444 29C33.0209 29 40 22.4945 40 14.5V6.21429C40 2.78759 37.0095 0 33.3333 0Z"
                          fill="#FFC27A"
                        />
                      </svg>
                    </div>
                    <p className="pt-[35px] customer-feedback group-hover:text-white">
                      Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                      pharetra. Nam sed imperdiet turpis. In hac habitasse
                      platea dictumst. Praesent nulla massa, hendrerit
                      vestibulum gravida in, feugiat auctor felis.
                    </p>
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

export default StudentFeedback;
