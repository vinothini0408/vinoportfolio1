import React from 'react';

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '60px 20px',
        backgroundColor: '#e0f2fe',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>My Projects</h2>

      {/* 🛒 Shopping App */}
      <div style={{ maxWidth: '700px', margin: '30px auto', background: '#fff', padding: '20px', borderRadius: '10px' }}>
        <h3>🛒 Shopping App (Frontend Only)</h3>
        <p>A simple React.js project that allows users to search products and add them to a cart.</p>
        <p style={{ color: '#6b7280' }}><i>Tech Used: React.js, CSS</i></p>
        <p><strong>Status:</strong> In Progress</p>

        {/* Placeholders for links */}
        <div style={{ marginTop: '10px' }}>
          <a
            href="#"
            style={{
              marginRight: '10px',
              color: '#2563eb',
              textDecoration: 'underline'
            }}
          >
            🔗 Live Demo (Coming Soon)
          </a>
          <a
            href="#"
            style={{
              color: '#2563eb',
              textDecoration: 'underline'
            }}
          >
            💻 GitHub (Coming Soon)
          </a>
        </div>
      </div>

      {/* 🌐 Portfolio Website */}
      <div style={{ maxWidth: '700px', margin: '30px auto', background: '#fff', padding: '20px', borderRadius: '10px' }}>
        <h3>🌐 Portfolio Website</h3>
        <p>This very portfolio website! Created with React.js to present my projects, skills, and resume.</p>
        <p style={{ color: '#6b7280' }}><i>Tech Used: React.js, Inline CSS</i></p>
        <p><strong>Status:</strong> Ongoing</p>

        <div style={{ marginTop: '10px' }}>
          <a
            href="#"
            style={{
              color: '#2563eb',
              textDecoration: 'underline'
            }}
          >
            🔗 Live Demo (This Page)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
