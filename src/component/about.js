import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '60px 20px',
        backgroundColor: '#ede9fe', // light lavender
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#6a0dad' }}>About Me</h2>

      <p style={{ maxWidth: '600px', margin: '20px auto', color: '#333' }}>
        I'm Vinothini Nallathambi, a B.Com (Computer Applications) graduate with a passion
        for web development. I have hands-on experience in frontend using
        technologies like Java, React.js and MySQL.
      </p>

      <p style={{ maxWidth: '600px', margin: '10px auto', color: '#333' }}>
        I'm a certified full-stack developer and have completed internships in software testing
        and technical support. I enjoy creating clean, user-friendly websites and learning new tools every day.
      </p>

      <h3 style={{ marginTop: '20px', color: '#4b0082' }}>🛠️ Skills:</h3>
      <p style={{ color: '#333' }}>
        HTML | CSS | JavaScript | React.js | Core Java | MySQL | Testing | MS Office | Excel | Word
      </p>

      <h3 style={{ marginTop: '20px', color: '#4b0082' }}>🎓 Certifications:</h3>
      <p style={{ color: '#333' }}>
        Core Java (Futogen), MySQL (Futogen), Full Stack Developer (Crampet)
      </p>

      {/* ✅ Working Download Resume Button */}
      <a
        href="/resume.pdf"
        download="VinothiniNallathambi_Resume.pdf"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '20px'
        }}
      >
        📄 Download Resume
      </a>
    </motion.section>
  );
}

export default About;
