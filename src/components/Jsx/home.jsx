import React from 'react';
import { Link } from 'react-router-dom';
import phoenixImg from '../Images/phoenix.jpg';
import '../Styles/index.scss';

const Home = () => {
  return (
    <div className='home'>
        <div className="text-zone">
          <h1>Welcome to</h1>
          <h1>Phoenix Firecoding</h1>
          <h2>Front End Developer / JavaScript</h2>
        </div>
        <div className='image-zone'>
            <img src={phoenixImg} alt='PhoenixLogo'/>
        </div>
    </div>
  );
}

export default Home;

      {/* <h1>Welcome to My CV</h1>
      <nav className='homeNav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
        </ul>
      </nav> */}
    {/* </div> */}
