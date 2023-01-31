import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png';

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights">change</span> ?
            </h2>
            <p>
              The best earning of life is staying healthy. Staying healthy means
              being physically, mentally and socially fit and stable. Suppose
              one knows how to have control over their health, then they know
              how to lead a successful life.
            </p>

            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
