import React, { useEffect } from 'react';
import './assets/css/bootstrap.css';
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
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.appendChild(script);
  });
}

function App() {
  useEffect(() => {
    async function loadScripts() {
      try {
        await loadScript('/assets/js/vendor/jquery.js');
        await loadScript('/assets/js/bootstrap-bundle.js');
        await loadScript('/assets/js/gsap.js');
        await loadScript('/assets/js/gsap-scroll-to-plugin.js');
        await loadScript('/assets/js/gsap-scroll-smoother.js');
        await loadScript('/assets/js/gsap-scroll-trigger.js');
        await loadScript('/assets/js/gsap-split-text.js');
        await loadScript('/assets/js/chroma.min.js');
        await loadScript('/assets/js/three.js');
        await loadScript('/assets/js/tween-max.js');
        await loadScript('/assets/js/scroll-magic.js');
        await loadScript('/assets/js/range-slider.js');
        await loadScript('/assets/js/swiper-bundle.js');
        await loadScript('/assets/js/slick.js');
        await loadScript('/assets/js/magnific-popup.js');
        await loadScript('/assets/js/nice-select.js');
        await loadScript('/assets/js/purecounter.js');
        await loadScript('/assets/js/beforeafter.js');
        await loadScript('/assets/js/isotope-pkgd.js');
        await loadScript('/assets/js/imagesloaded-pkgd.js');
        await loadScript('/assets/js/ajax-form.js');
        await loadScript('/assets/js/webgl.js');
        await loadScript('/assets/js/main.js');
        await loadScript('/assets/js/tp-cursor.js');
        await loadScript('/assets/js/test.js');
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
