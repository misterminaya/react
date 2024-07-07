import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import OffCanvas from '../components/OffCanvas';
import Services from '../components/Services';

const Home = () => {
  return (
    <div id="body" className="tp-magic-cursor">
      <Preloader />
      <OffCanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Add your sections and components here */}
            <Services />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
