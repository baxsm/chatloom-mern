import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { authSliderData } from "@/constants/auth";
import { Button } from "../ui/button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AuthSlider: FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="relative h-full w-full">
      <Swiper
        navigation={{ prevEl, nextEl }}
        pagination={true}
        modules={[Navigation, Pagination]}
        speed={1200}
        spaceBetween={50}
        loop
        className="h-full w-[44vw]"
      >
        {authSliderData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-start items-center h-full "
          >
            <div className="flex items-center justify-center">
              <img
                className="object-cover min-w-[44vw] rounded-2xl h-[95vh]"
                src={item.imageUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center absolute bottom-[2vh] left-[2.6vw] w-[45vw] z-20">
        <Button
          ref={(node) => setPrevEl(node)}
          className="border-8 py-6 px-6 mt-4 rounded-none rounded-tr-xl border-dark-2 bg-transparent/60 hover:bg-transparent/80 text-secondary hover:text-primary"
        >
          <AiOutlineArrowLeft className="text-2xl" />
        </Button>
        <Button
          ref={(node) => setNextEl(node)}
          className="border-8 py-8 px-12 mr-2 rounded-none rounded-tl-xl border-dark-2 bg-transparent/60 hover:bg-transparent/80 text-secondary hover:text-primary"
        >
          <AiOutlineArrowRight className="text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default AuthSlider;
