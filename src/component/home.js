import React from 'react';
import image from '../images/vino.jpg';

function Home() {
  return (
    <section
      id="home"
      style={{
        padding: '60px 30px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center'
      }}
    >
        <img src={image}  alt="vino" 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          marginBottom: '20px',
          objectFit: 'cover'
        }}/>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        Hello, I'm <span style={{ color: '#6a0dad' }}>Vinothini nallathambi </span> 👋
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        Aspiring Frontend Developer passionate about building beautiful UIs
      </p>
      
    </section>
  );
}

export default Home;
