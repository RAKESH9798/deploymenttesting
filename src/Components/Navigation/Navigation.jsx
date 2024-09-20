import React, { useEffect, useRef, useState } from 'react';
import './Navigation.css';
// import About from '../About/About.jsx';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu=()=>{
    setMenuOpen(false);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth>768 && menuOpen){
        closeMenu();
      }
    };

    window.addEventListener('resize',handleResize);

    return ()=>{
      window.addEventListener('resize',handleResize);
    };

  },[menuOpen])

  return (
    <div className="navigation">
      <div className="brand">
        <h1><a href="#homepage">PORTFOLIO</a></h1>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`nav-item ${menuOpen ? 'active' : ''}`}  ref={menuRef} >
        <ul className={`item-container ${menuOpen ? 'active' : ''}`}>
          <li className="item"><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li className="item"><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li className="item"><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
          <li className="item"><a href="#hireme" onClick={closeMenu}>Hire Me</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
