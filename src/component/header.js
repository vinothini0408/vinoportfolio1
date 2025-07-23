import React from 'react';
import { motion } from 'framer-motion';

const linkStyle = {
  marginLeft: '20px',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  cursor: 'pointer',
};

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '20px' }}>Vino's Portfolio</h1>
      <nav>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
    </motion.header>
  );
}

export default Header;
