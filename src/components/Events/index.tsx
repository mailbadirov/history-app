import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { periodEvents } from "../../App/constants";

import type { Swiper as SwiperInstance } from "swiper";

import EventCard from "./EventCard";

import { EventsContainer, EventSlideButton } from "./styles";
import { useGlobalContext } from "../../App";
import { ButtonArrow } from "../../App/styles";

const Events = () => {
  const { period } = useGlobalContext();

  const [swiperInstance, setSwiperInstance] =
    useState<SwiperInstance | null>(null);

  let eventsBlock = useRef(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }

    gsap.fromTo(
      eventsBlock.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, [period]);

  return (
    <EventsContainer>
      <EventSlideButton left={true} id="previousSlideButton">
        <ButtonArrow color="var(--royal-blue)" left={true} />
      </EventSlideButton>

      <Swiper
        ref={eventsBlock}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: "#nextSlideButton",
          prevEl: "#previousSlideButton",
        }}
        slidesPerView={1.5}
        grabCursor={true}
        breakpoints={{
          601: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {periodEvents[period].map(({ year, description }, index) => (
          <SwiperSlide key={index}>
            <EventCard year={year} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>

      <EventSlideButton id="nextSlideButton">
        <ButtonArrow color="var(--royal-blue)" />
      </EventSlideButton>
    </EventsContainer>
  );
};

export default Events;
