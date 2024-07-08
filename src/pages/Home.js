import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa el bundle de Bootstrap, que incluye Popper.js y otros componentes de JavaScript
import $ from 'jquery'; // Importa jQuery
import Header from '../components/Header';
import Footer from '../components/Footer';
import OffCanvas from '../components/OffCanvas';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div id="body" className="tp-magic-cursor">
      <OffCanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Banner />
            <Services />
            <Testimonial />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
