"use-client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const EDUCATION_DATA = [
  {
    institution: "Islamic University of Technology",
    degree: "Bsc in Software Engineering",
    year: "2021-Present",
    logo: "/images/iut.jpeg",
  },
  {
    institution: "Holy Cross College",
    degree: "Higher Secondary School Certificate (HSC), Science",
    year: "Jan 2005-June 2018",
    logo: "/images/hcc.png",
  },
  {
    institution: "YWCA Higher Secondary Girls' School",
    degree: "Secondary School Certificate (SSC), Science",
    year: "July 2018- July 2020",
    logo: "/images/ywca.png",
  },
];

const EducationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider-container relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>
        {EDUCATION_DATA.map((education, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <Image
                  src={education.logo}
                  width={50}
                  height={50}
                  alt={education.institution}
                />
                <h3 className="text-xl font-bold mt-4">
                  {education.institution}
                </h3>
                <p className="text-md mt-2">{education.degree}</p>
                <p className="text-sm mt-1">{education.year}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="dots-container flex justify-center mt-4">
        {EDUCATION_DATA.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: index === currentSlide ? "#be2398" : "#f4f4f4",
              borderRadius: "50%",
              margin: "0 5px",
            }}></span>
        ))}
      </div>
    </div>
  );
};

export default EducationSlider;
