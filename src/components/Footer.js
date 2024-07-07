import React from 'react';
import logoWhite from '../assets/img/logo/SIN-ROLLO-BLANCO.png';

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <a className="tp-footer-3-logo p-relative" href="index.html">
                    <img src={logoWhite} alt="logo" />
                  </a>
                  <p className="mb-100">Bodas foto y videos</p>
                </div>
                <div className="tp-footer-3-widget">
                  <div className="tp-footer-3-social">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Mapa del sitio</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><a href="index.html">Inicio</a></li>
                      <li><a href="about-us.html">Nosotros</a></li>
                      <li><a href="portfolio-details-1.html">Servicios</a></li>
                      <li><a href="blog-details.html">Portafolio</a></li>
                      <li><a href="contact.html">Contacto</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title tp-title-phone">Contacto</h4>
                  <div className="tp-footer-6-talk">
                    <span>¿Tienes preguntas? Llámanos.</span>
                    <h4><a href="tel:+67041390762">+51 977 843 556</a></h4>
                  </div>
                  <div className="tp-footer-6-contact-item d-flex align-items-start">
                    <div className="tp-footer-6-contact-icon">
                      <span>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M13 5.40027L10.496 7.40003C9.672 8.05595 8.32 8.05595 7.496 7.40003L5 5.40027" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1 11.4003H5.8" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1 8.19946H3.4" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div className="tp-footer-6-contact-content">
                      <a href="mailto:liko@gmail.com">SINROLLO.PE@GMAIL.COM</a>
                    </div>
                  </div>
                  <div className="tp-footer-6-contact-item d-flex align-items-start">
                    <div className="tp-footer-6-contact-icon">
                      <span>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.50086 10.9417C9.99963 10.9417 11.2146 9.72668 11.2146 8.22791C11.2146 6.72915 9.99963 5.51416 8.50086 5.51416C7.0021 5.51416 5.78711 6.72915 5.78711 8.22791C5.78711 9.72668 7.0021 10.9417 8.50086 10.9417Z" stroke="white" stroke-width="1.5" />
                          <path d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z" stroke="white" stroke-width="1.5" />
                        </svg>
                      </span>
                    </div>
                    <div className="tp-footer-6-contact-content">
                      <a href="https://www.google.com/maps" target="_blank">AV PROCERES DE HUANDOY 489<br />LOS OLIVOS - LIMA - PERU</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area tp-copyright-2-bdr-top dark-bg">
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-copyright-2-left text-center">
                <p>© 2024 Todos los Derechos Reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
