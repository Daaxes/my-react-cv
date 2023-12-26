import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/index.scss';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to My CV</h1>
      <nav className='homeNav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;