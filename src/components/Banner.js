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

const Banner = () => {
  return (
    <div className="tp-shop-slider-area p-relative">
      <div className="shop-slider-wrapper">
        <div className="swiper-container tp-shop-slider-active">
          <div className="tp-shop-slider-arrow-box">
            <button className="tp-shop-next">
              <i className="fa-light fa-angle-left"></i>
            </button>
            <button className="tp-shop-prev">
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="tp-shop-slider-bg tp-shop-slider-ovarlay">
                <div
                  className="tp-shop-slider-thumb"
                  style={{ backgroundImage: 'url(assets/img/inner-shop/home/PORTADA_CRISTHIAN.jpg)' }}
                ></div>
                <div className="container container-1300">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="tp-shop-slider-content z-index">
                        <div className="tp-shop-slider-title-box">
                          <span className="tp-shop-slider-subtitle">text texo texot</span>
                          <h2 className="tp-shop-slider-title">
                            casate <br /> conmigo??
                          </h2>
                        </div>
                        <div className="tp-shop-slider-btn-box">
                          <a className="tp-shop-btn" href="shop-details.html">
                            PORTAFOLIO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-shop-slider-bg tp-shop-slider-ovarlay">
                <div
                  className="tp-shop-slider-thumb"
                  style={{ backgroundImage: 'url(assets/img/inner-shop/home/PORTADA_ELENA.jpg)' }}
                ></div>
                <div className="container container-1300">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="tp-shop-slider-content z-index">
                        <div className="tp-shop-slider-title-box">
                          <span className="tp-shop-slider-subtitle">texto corto</span>
                          <h2 className="tp-shop-slider-title">
                            texto <br /> texto grande
                          </h2>
                        </div>
                        <div className="tp-shop-slider-btn-box">
                          <a className="tp-shop-btn" href="shop-details.html">
                            PORTAFOLIO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-shop-slider-bg tp-shop-slider-ovarlay">
                <div
                  className="tp-shop-slider-thumb"
                  style={{ backgroundImage: 'url(assets/img/inner-shop/home/PORTADA_MAURICIO.jpg)' }}
                ></div>
                <div className="container container-1300">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="tp-shop-slider-content z-index">
                        <div className="tp-shop-slider-title-box">
                          <span className="tp-shop-slider-subtitle">textoq</span>
                          <h2 className="tp-shop-slider-title">
                            texto2 <br /> texto32432
                          </h2>
                        </div>
                        <div className="tp-shop-slider-btn-box">
                          <a className="tp-shop-btn" href="shop-details.html">
                            PORTAFOLIO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fraction-wrapper d-none d-lg-block">
            <div id="paginations"></div>
            <div className="shop-slider-progress-bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
