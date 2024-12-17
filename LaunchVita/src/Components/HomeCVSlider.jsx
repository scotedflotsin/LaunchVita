import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Core CSS
import '@splidejs/react-splide/css/skyblue'; // Using the skyblue theme

const HomeCVSlider = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6">
      {/* Centering and setting max width */}
      <div className="w-full max-w-[1200px] mt-[50px]">
        <Splide
          options={{
            perPage: 4,
            rewind: true,
            gap: '1rem',
            arrows: false, // Hides arrows
            pagination: false, // Hides pagination dots
            breakpoints: {
              1024: {
                perPage: 3, // 3 slides per view on medium screens
              },
              768: {
                perPage: 2, // 2 slides per view on small screens
              },
              640: {
                perPage: 1, // 1 slide per view on very small screens
              },
            },
          }}
        >
          {/* Slides */}
          <SplideSlide>
            <img
              src="https://i.pinimg.com/736x/5d/e6/75/5de675c806a055f1219aed28600f3a62.jpg"
              className="w-[250px] mx-auto"
              alt="Slide 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg"
              className="w-[250px] mx-auto"
              alt="Slide 2"
            />
          </SplideSlide>
          {/* Add more slides as needed */}
        </Splide>
      </div>
    </div>
  );
};

export default HomeCVSlider;
