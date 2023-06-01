// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../../src/index.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function Banner() {
  return (
    <div
      className="max-w-[1920px] mx-auto"
      style={{ fontFamily: "Roboto Slab" }}
    >
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000, // milliseconds
          disableOnInteraction: false, // stops autoplay when the user interacts with the slider
        }}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("./slider1.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl font-bold">
                  The Perfect Space to Enjoy{" "}
                  <span className="text-yellow-600 font-extrabold">
                    Italian
                  </span>{" "}
                  Food
                </h1>
                <p className="mb-5">
                  Festive dining at Farthings where we are strong believers in
                  using the very best produce
                </p>
                <button className="btn btn-primary">See Our Chefs Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("./slider2.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl font-bold">
                  The Perfect Space to Enjoy{" "}
                  <span className="text-yellow-600 font-extrabold">
                    Italian
                  </span>{" "}
                  Food
                </h1>
                <p className="mb-5">
                  Festive dining at Farthings where we are strong believers in
                  using the very best produce
                </p>
                <button className="btn btn-primary">See Our Chefs Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("./slider3.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl font-bold">
                  The Perfect Space to Enjoy{" "}
                  <span className="text-yellow-600 font-extrabold">
                    Italian
                  </span>{" "}
                  Food
                </h1>
                <p className="mb-5">
                  Festive dining at Farthings where we are strong believers in
                  using the very best produce
                </p>
                <button className="btn btn-primary">See Our Chefs Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
