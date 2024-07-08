import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/css/swiper-bundle.css'; // Asegúrate de que esta ruta sea correcta
import '../assets/css/bootstrap.css';
import '../assets/css/animate.css';
import '../assets/css/slick.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/font-awesome-pro.css';
import '../assets/css/spacing.css';
import '../assets/css/custom-animation.css';
import '../assets/css/main.css';

const Testimonial = () => {
  return (
    <div className="tp-testimonial-area pt-140 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3335 8.63672H1.3335"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M8.42188 0.69043C8.42188 5.08274 4.65513 8.63691 0.000114646 8.63691"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M0.000114646 8.63672C4.65513 8.63672 8.42188 12.1909 8.42188 16.5832"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666504 8H18.6665"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M11.5781 0C11.5781 4.42189 15.3449 8 19.9999 8"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M19.9999 8C15.3449 8 11.5781 11.5781 11.5781 16"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="swiper-container tp-testimonial-slider-active fix">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tp-testimonial-item text-center">
                      <p>
                        “Nulla ut enim non magna placerat scelerisque sed eu dolor. Sed eu faucibus
                        turpis. Ut bibendum tempor tempus. Ut scelerisque est posuere ex pretium
                        laoreet.”
                      </p>
                      <span>
                        <em>Louis Fantun</em> - Designer
                      </span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-testimonial-item text-center">
                      <p>
                        “Nulla ut enim non magna placerat scelerisque sed eu dolor. Sed eu faucibus
                        turpis. Ut bibendum tempor tempus. Ut scelerisque est posuere ex pretium
                        laoreet.”
                      </p>
                      <span>
                        <em>Louis Fantun</em> - Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
