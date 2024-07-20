import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { CategoriesData } from "./categoriesData";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <Swiper
        breakpoints={{
          340: { slidesPerView: 2,spaceBetween: 15,},
          700: {slidesPerView: 4,spaceBetween: 15,},
        }}
        freeMode={true}
        pagination={{clickable: true,}}
        modules={[FreeMode, Pagination]}
      >
        {CategoriesData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[150px] w-[115px] lg:h-[200px] lg:w-[250px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;