import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Offerings from './Offerings';
import Industries from './Industries';
import Solutions from './Solutions';
import Technologies from './Technologies';
import Partners from './Partners';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Offerings />
      <Industries />
      <Solutions />
      <Technologies />
      <Partners />
      <Testimonials />
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;