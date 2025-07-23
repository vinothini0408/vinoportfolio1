import React from 'react';
import { motion } from "framer-motion";

function Projects() {
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
        Featured Projects
      </h2>

      {/* Shopping Cart App */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 40px',
        background: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
      }}>
        <h3 style={{ color: '#0f172a', marginBottom: '10px' }}>🛒 Shopping Cart App</h3>
        <p style={{ lineHeight: '1.6' }}>
          A responsive frontend-only e-commerce application built with React.js. The app includes a product search functionality, cart management, and a clean user interface optimized for a smooth shopping experience.
        </p>
        <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#334155' }}>
          <li>Real-time product filtering via search bar</li>
          <li>Add to cart and remove items functionality</li>
          <li>State management using React useState</li>
          <li>Mobile-friendly and clean UI with CSS</li>
        </ul>
        <p style={{ marginTop: '15px', color: '#475569' }}>
          <strong>Tech Stack:</strong> React.js, CSS
        </p>
        <p style={{ marginTop: '5px' }}><strong>Status:</strong> In Progress</p>
        <p style={{ marginTop: '5px', fontStyle: 'italic', color: '#64748b' }}>
          (Live demo will be available soon)
        </p>
      </div>

      {/* Portfolio Website */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
      }}>
        <h3 style={{ color: '#0f172a', marginBottom: '10px' }}>🌐 Portfolio Website</h3>
        <p style={{ lineHeight: '1.6' }}>
          A personal portfolio website created using React.js. It showcases my work, technical skills, and resume. Designed to reflect my personality while maintaining a professional tone.
        </p>
        <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#334155' }}>
          <li>Sections include About, Skills, Projects, and Contact</li>
          <li>Responsive layout for all screen sizes</li>
          <li>Clean and minimalistic design</li>
          <li>Built and deployed as a single-page application</li>
        </ul>
        <p style={{ marginTop: '15px', color: '#475569' }}>
          <strong>Tech Stack:</strong> React.js, Inline CSS
        </p>
        <p style={{ marginTop: '5px' }}><strong>Status:</strong> Ongoing</p>
      </div>
    </motion.section>
  );
}

export default Projects;
