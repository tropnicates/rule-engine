import React from 'react';
import { Link } from 'react-router-dom';

<Link to="/rules">Go to Rules</Link>

const Home = () => {
  return (
    <div className='home'>
      <div className='head'>Welcome to the Rule Engine</div>
      <div className='para'>Create, combine, and validate rules.</div>
    </div>
  );
};

export default Home;
