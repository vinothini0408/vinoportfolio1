import React from "react";

function About(){
    return(
        <section id="about"
        style={{
            padding: '60px 20px',
            backgroundColor: '#ede9fe' , // light lavender,
             textAlign: 'center',
             
        }}
        >
            <h2 style={{fontSize: '2rem', color: '#6a0dad'}}>About Me</h2>
             <p style={{ maxWidth: '600px', margin: '20px auto', color: '#333' }}>I'm Vinothini Nallathambi, a B.Com (Computer Applications) graduate with a passion
        for web development. I have hands-on experience in frontend using
        technologies like java, React.js and MySQL.</p>
        <p>
        I'm a certified full-stack developer and have completed internships in software testing
        and technical support. I enjoy creating clean, user-friendly websites and learning new tools every day.
      </p>
      <h3 style={{ marginTop: '20px' }}>🛠️ Skills:</h3>
      <p>HTML | CSS | JavaScript | React.js | Core Java | MySQL | Testing | MS Office | Ms Excel | Ms Word</p>
      <h3 style={{ marginTop: '20px' }}>🎓 Certifications:</h3>
      <p>Core Java (Futogen), MySQL (Futogen), Full Stack Developer (Crampet)</p>
            
        </section>
    );
}

export default About;