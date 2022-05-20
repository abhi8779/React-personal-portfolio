import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/IMG_20220520_230414.jpg";
import AVTR2 from "../../assets/WhatsApp Image 2022-05-20 at 11.12.40 PM.jpeg";
import AVTR3 from "../../assets/WhatsApp Image 2022-05-20 at 11.10.31 PM.jpeg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const datas = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Bhupesh Dhapola",
    review:
      "Thank you so much for helping me on the frontend part of my final year Project, all the front end logic was amazing. the code is really clean and easily maintainable  ",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Aryan Ghatkar",
    review:
      "Thankx for such a great website I really appreciate the work put in this React web site. all the Components are amazing",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Praveen",
    review: "thanks for such a simple yet efficient advertisement Web page.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules modules=
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {datas.map((data) => {
          return (
            <SwiperSlide key={data.id} className="testimonial">
              <div className="client__avatar">
                <img src={data.avatar} alt={"avtr1"}></img>
              </div>
              <h5 className="client__name">{data.name}</h5>
              <small className="client__review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
