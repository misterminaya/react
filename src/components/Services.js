import React from 'react';
import premiumImg from '../assets/img/inner-service/service/PREMIUM.jpeg';
import esencialImg from '../assets/img/inner-service/service/ESENCIAL.jpeg';
import standardImg from '../assets/img/inner-service/service/STANDARD.jpeg';
import vipImg from '../assets/img/inner-service/service/VIP.jpeg';

const Services = () => {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        <div className="sv-service-item project-panel-2">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-thumb">
                <img src={premiumImg} alt="Pack Premium" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-content-wrap d-flex align-items-center">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle"><i>01</i>Servicios</span>
                    <h4 className="sv-service-title">Pack Premium</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    </div>
                    <div className="sv-service-list">
                      <ul>
                        <li>Cobertura de video profesional | Full HD | 1 Cámara (11 horas)</li>
                        <li>Drone + Operador</li>
                        <li>600 fotos editadas | digital , colorizado</li>
                        <li>100 fotos retocados</li>
                        <li>1 video editado full cobertura (3 horas)</li>
                        <li>1 video resumen cinemático (10 min)</li>
                      </ul>
                    </div>
                    <div className="sv-service-btn">
                      <a className="tp-btn-zikzak zikzak-inner p-relative" href="service-details.html">
                        <span className="zikzak-content">
                          Más <br />
                          Detalles
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2434 8.16465C16.3866 8.31677 16.4668 8.52224 16.4668 8.73637C16.4668 8.9505 16.3866 9.15597 16.2434 9.30811L9.38818 16.53C9.24196 16.6773 9.04774 16.7599 8.84546 16.7607C8.74439 16.7602 8.64426 16.7399 8.55031 16.7005C8.41169 16.6392 8.2934 16.5359 8.21038 16.4038C8.12736 16.2717 8.0833 16.1167 8.08378 15.9583V9.53881H1.22849C1.02648 9.53881 0.832739 9.45428 0.689893 9.30378C0.547047 9.15329 0.466797 8.9492 0.466797 8.73637C0.466797 8.52356 0.547047 8.31945 0.689893 8.16897C0.832739 8.01848 1.02648 7.93395 1.22849 7.93395H8.08378V1.51445C8.0833 1.35603 8.12736 1.20101 8.21038 1.06892C8.2934 0.936828 8.41169 0.833584 8.55031 0.772196C8.691 0.714385 8.84436 0.699718 8.99264 0.729895C9.14092 0.760071 9.27805 0.833857 9.38818 0.942715L16.2434 8.16465Z" fill="currentColor" />
                          </svg>
                        </span>
                        <svg className="anim" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.6957 3.50452C61.9534 -0.481752 68.0466 -0.481752 71.3043 3.50452C74.073 6.89259 78.8544 7.84365 82.7089 5.77305C87.2441 3.33685 92.8735 5.66865 94.3577 10.5981C95.6191 14.7879 99.6725 17.4963 104.026 17.0583C109.148 16.5431 113.457 20.8517 112.942 25.9739C112.504 30.3275 115.212 34.3809 119.402 35.6423C124.331 37.1265 126.663 42.7559 124.227 47.2911C122.156 51.1456 123.107 55.927 126.495 58.6957C130.482 61.9534 130.482 68.0466 126.495 71.3043C123.107 74.073 122.156 78.8544 124.227 82.7089C126.663 87.2441 124.331 92.8735 119.402 94.3577C115.212 95.6191 112.504 99.6725 112.942 104.026C113.457 109.148 109.148 113.457 104.026 112.942C99.6725 112.504 95.6191 115.212 94.3577 119.402C92.8735 124.331 87.2441 126.663 82.7089 124.227C78.8544 122.156 74.073 123.107 71.3043 126.495C68.0466 130.482 61.9534 130.482 58.6957 126.495C55.927 123.107 51.1456 122.156 47.2911 124.227C42.7559 126.663 37.1265 124.331 35.6423 119.402C34.3809 115.212 30.3275 112.504 25.9739 112.942C20.8517 113.457 16.5431 109.148 17.0583 104.026C17.4963 99.6725 14.7879 95.6191 10.5981 94.3577C5.66864 92.8735 3.33685 87.2441 5.77305 82.7089C7.84365 78.8544 6.89259 74.073 3.50452 71.3043C-0.481752 68.0466 -0.481752 61.9534 3.50452 58.6957C6.89259 55.927 7.84365 51.1456 5.77305 47.2911C3.33685 42.7559 5.66865 37.1265 10.5981 35.6423C14.7879 34.3809 17.4963 30.3275 17.0583 25.9739C16.5431 20.8517 20.8517 16.5431 25.9739 17.0583C30.3275 17.4963 34.3809 14.7879 35.6423 10.5981C37.1265 5.66865 42.7559 3.33685 47.2911 5.77305C51.1456 7.84365 55.927 6.89259 58.6957 3.50452Z" stroke="white" stroke-opacity="0.12" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other service items */}
      </div>
    </div>
  );
};

export default Services;
