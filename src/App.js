import React, { useEffect } from 'react';
import './assets/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa el bundle de Bootstrap, que incluye Popper.js y otros componentes de JavaScript
import $ from 'jquery'; // Importa jQuery
import './assets/css/animate.css';
import './assets/css/swiper-bundle.css';
import './assets/css/slick.css';
import './assets/css/magnific-popup.css';
import './assets/css/font-awesome-pro.css';
import './assets/css/spacing.css';
import './assets/css/custom-animation.css';
import './assets/css/main.css';
import Home from './pages/Home';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      console.log(`${src} loaded`);
      resolve();
    };
    script.onerror = () => {
      console.error(`Error loading script: ${src}`);
      reject(new Error(`Script load error for ${src}`));
    };
    document.head.appendChild(script);
  });
}

function App() {
  useEffect(() => {
    async function loadScripts() {
      try {
        await loadScript('/assets/js/vendor/jquery.js');
        // Aquí puedes agregar cualquier código que necesite jQuery
        $(document).ready(() => {
          console.log('jQuery is working');
          $('h1').css('color', 'blue');
        });
      } catch (error) {
        console.error('Error loading script:', error);
      }
    }

    loadScripts();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
