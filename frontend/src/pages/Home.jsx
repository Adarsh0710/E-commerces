import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OutPolicy from '../components/OutPolicy';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OutPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
