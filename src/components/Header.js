import React from 'react';
import logo from '../assets/img/logo/SIN-ROLLO-NARANJA.png';
import logoWhite from '../assets/img/logo/SIN-ROLLO-BLANCO.png';

const Header = () => {
  return (
    <header className="tp-header-height">
      <div id="header-sticky" className="tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="tp-header-logo">
                <a className="logo-1" href="index.html"><img src={logo} alt="logo" /></a>
                <a className="logo-2" href="index.html"><img src={logoWhite} alt="logo" /></a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 d-none d-xl-block">
              <div className="tp-header-menu header-main-menu text-center">
                <nav className="tp-main-menu-content">
                  <ul>
                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="#">NOSOTROS</a></li>
                    <li><a href="portfolio-random-1.html">PORTAFOLIO</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg col-6">
              <div className="tp-header-bar text-end">
                <button className="tp-offcanvas-open-btn">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
