import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

export const Banner = () => {


  return (
    <Box>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651894451/hors/banner/hotel_06_ep0zke.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651689827/hors/banner/hotel_02_lwstlh.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651689827/hors/banner/hotel_03_lzxm5v.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651689828/hors/banner/hotel_01_gmvtxs.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651689827/hors/banner/hotel_05_fg4pif.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/cardiadev/image/upload/v1651689827/hors/banner/hotel_04_y8ecgs.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
