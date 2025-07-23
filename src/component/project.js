import React from 'react';
import { motion } from "framer-motion";

function Project() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '60px 20px',
        backgroundColor: '#e0f2fe',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '40px' }}>
        ✨ Featured Projects
      </h2>

      {/* Project 1: Shopping Cart App */}
      <div style={cardStyle}>
        <h3 style={titleStyle}>🛒 Shopping Cart App</h3>
        <p style={textStyle}>
          A responsive e-commerce frontend built with React. It includes live product filtering,
          cart management, and a user-friendly layout.
        </p>
        <ul style={listStyle}>
          <li>Real-time search bar filtering</li>
          <li>Add/remove products from cart</li>
          <li>useState for managing cart</li>
          <li>Responsive CSS styling</li>
        </ul>
        <p><strong>Tech Stack:</strong> React.js, CSS</p>
        <p><strong>Status:</strong> In Progress</p>
        <p style={{ fontStyle: 'italic', color: '#64748b' }}>(Live demo coming soon)</p>
      </div>

      {/* Project 2: Portfolio Website */}
      <div style={{ ...cardStyle, marginTop: '40px' }}>
        <h3 style={titleStyle}>🌐 Portfolio Website</h3>
        <p style={textStyle}>
          A single-page React portfolio showing my skills, resume, and project work. Built to be
          clean and responsive across all devices.
        </p>
        <ul style={listStyle}>
          <li>About, Skills, Projects, Contact sections</li>
          <li>Fully responsive layout</li>
          <li>Minimal design using inline styles</li>
          <li>Deployed using GitHub Pages</li>
        </ul>
        <p><strong>Tech Stack:</strong> React.js, Inline CSS</p>
        <p><strong>Status:</strong> Ongoing</p>
      </div>
    </motion.section>
  );
}

// ✨ Styles
const cardStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  background: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'left'
};

const titleStyle = {
  color: '#0f172a',
  marginBottom: '10px'
};

const textStyle = {
  lineHeight: '1.6',
  marginBottom: '10px',
  color: '#334155'
};

const listStyle = {
  paddingLeft: '20px',
  color: '#334155',
  marginBottom: '15px'
};

export default Project;
