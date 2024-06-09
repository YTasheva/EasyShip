import React from 'react';
import Slide from '../components/Slide';
import Welcome from '../components/Welcome';
import Service from '../components/Service';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import News from '../components/News';

const Home = () => {
  return (
    <main>
      <Slide />
      <Welcome />
      <Service />
      <Statistics />
      <Testimonials />
      <Clients />
      <News />
    </main>
  );
};

export default Home;
