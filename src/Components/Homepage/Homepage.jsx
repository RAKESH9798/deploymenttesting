import React from 'react';
import './Homepage.css';
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <hr className="dotted" />
      <About />
    </div>
  );
}

export default HomePage;
