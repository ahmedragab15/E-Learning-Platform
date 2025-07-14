"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwiperSlider = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation={{
        nextEl: `.swiper-button-next-${id}`,
        prevEl: `.swiper-button-prev-${id}`,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlider;
