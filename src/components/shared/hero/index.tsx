"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import MainButton from "../main-button";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/effect-fade";

const HeroContainer = () => {
  const heroImages = [
    "img/hero/carousel.png",
    "img/hero/carousel.png",
    "img/hero/carousel.png",
  ];
  return (
    <div id="hero-carousel" className="flex gap-4">
      <div className="pt-6 flex-1 flex flex-col gap-4 mr-5">
        <div className="relative w-full h-[200px] appearance-none outline-none cursor-pointer rounded-[20px] flex justify-center items-center shadow-[-10px_-10px_15px_rgba(255,255,255,0.5),10px_10px_15px_rgba(70,70,70,0.12)] title-hero bg-[#f9f9f9] mb-6">
          <div className="text-shadow-primary text-primary text-7xl font-extrabold tracking-widest text-center pt-2 pb-8 rounded-2xl">
            Exchange Car
          </div>
          <div className="absolute top-3 left-3 w-4 h-4 bg-[rgb(128_126_126)] rounded-full shadow-2xl"></div>
          <div className="absolute top-3 right-3 w-4 h-4 bg-[rgb(128_126_126)] rounded-full shadow-2xl"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 bg-[rgb(128_126_126)] rounded-full shadow-2xl"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 bg-[rgb(128_126_126)] rounded-full shadow-2xl"></div>
        </div>
        <p className="font-bold text-6xl leading-normal">
          Nền tảng kinh doanh xe ô tô uy tín, chất lượng
        </p>
        <MainButton
          title="Explore Cars"
          className="w-fit px-4 py-2"
          onClick={() => {}}
        />
      </div>
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        grabCursor={true}
        pagination={{
          clickable: false,
        }}
        effect={"fade"}
        // autoplay={{ delay: 4000 }}
        className="HeroSwiper flex-1"
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={"hero-carousel-" + index}>
            <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1140px]">
              <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
                <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
                  <Image
                    src="/assets/images/hero/hero.png"
                    alt="hero"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('/assets/images/hero/hero-bg.png')] bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
    </div>
  );
};

export default HeroContainer;
