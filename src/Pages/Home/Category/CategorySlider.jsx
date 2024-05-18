// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay,Pagination]}
      className="mySwiper font-cinzel"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h2 className="text-3xl  text-white font-normal ml-8 uppercase  -mt-10">salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide2} alt="" />
        <h2 className="text-3xl  text-white font-normal ml-8 uppercase  -mt-10">pizzas</h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide3} alt="" />
        <h2 className="text-3xl  text-white font-normal ml-8 uppercase  -mt-10">soup</h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide4} alt="" />
        <h2 className="text-3xl  text-white font-normal ml-8 uppercase  -mt-10">desserts</h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide5} alt="" />
        <h2 className="text-3xl  text-white font-normal ml-8 uppercase  -mt-10">salad</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySlider;
