import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './CardSlider.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

// Import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install modules
SwiperCore.use([Navigation, Pagination]);

function CardSlider() {
  const cardData = [
    {
      id: 1,
      name: 'Kell Dawx',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      imgSrc: 'assets/img/avatar-1.png',
    },
    {
      id: 2,
      name: 'Lotw Fox',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      imgSrc: 'assets/img/avatar-2.png',
    },
    {
      id: 3,
      name: 'Sara Mit',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      imgSrc: 'assets/img/avatar-3.png',
    },
    {
      id: 4,
      name: 'Jenny Wert',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      imgSrc: 'assets/img/avatar-4.png',
    },
    {
      id: 5,
      name: 'Lexa Kin',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      imgSrc: 'assets/img/avatar-5.png',
    },
  ];

  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card__article">
              <div className="card__image">
                <img src={card.imgSrc} alt={card.name} className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__data">
                <h3 className="card__name">{card.name}</h3>
                <p className="card__description">{card.description}</p>
                <a href="#" className="card__button">View More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-next">
          <FaArrowRight />
        </div>
        <div className="swiper-button-prev">
          <FaArrowLeft />
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default CardSlider;
