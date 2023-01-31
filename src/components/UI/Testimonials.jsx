import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../styles/testimonial.css';
import { EffectCards } from 'swiper';
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';

const Testimonials = () => {
  return (
    <section>
      <div className="container sliders">
        <h2 className="section__title">Testimonials</h2>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide__item">
              <div className="slide__img-01">
                <img src={avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                There is a famous proverb stating, “Health is Wealth,” which is{' '}
                <br />
                self-explanatory. Health is an asset to human life, which leads{' '}
                <br /> to a stable and calm mind, ultimately leading to a
                wealthy life.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__item">
              <div className="slide__img-02">
                <img src={avatar02} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                There is a famous proverb stating, “Health is Wealth,” which is{' '}
                <br />
                self-explanatory. Health is an asset to human life, which leads{' '}
                <br /> to a stable and calm mind, ultimately leading to a
                wealthy life.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__item">
              <div className="slide__img-03">
                <img src={avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                There is a famous proverb stating, “Health is Wealth,” which is{' '}
                <br />
                self-explanatory. Health is an asset to human life, which leads{' '}
                <br /> to a stable and calm mind, ultimately leading to a
                wealthy life.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
