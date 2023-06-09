import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import "./Card.scss"

const PizzaCard = ({ recipe }) => {
  return (
    <div className='cardContainer'>
      <Swiper className="carrouselSlide"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 28,
          },

        }}
      >
        {recipe.image?.map((element) => (
          <SwiperSlide className="carrousel">
            <img src={element.photo} alt="photo" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination" />

      <h3>{recipe.name}</h3>
      <span className='contentPrice' >{recipe.precio}</span>

      </div>


  )
}

      export default PizzaCard
