import React from 'react';

function Header() {
  return (
    <header
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
    </header>
  );
}

// shared link style
const linkStyle = {
  marginLeft: '20px',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  cursor: 'pointer'
};

export default Header;
