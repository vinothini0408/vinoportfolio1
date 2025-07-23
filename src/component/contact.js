import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "60px 20px",
        backgroundColor: "#fce7f3", // soft rose pink
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#831843", marginBottom: "20px" }}>
        📬 Contact Me
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#374151" }}>
        Feel free to reach out to me via email or phone:
      </p>

      <p style={infoStyle}>📧 <strong>vinothini4.slm@gmail.com</strong></p>
      <p style={infoStyle}>📱 <strong>99421 25687</strong></p>
      <p style={{ marginTop: "10px", fontSize: "1rem", color: "#475569" }}>
        📍 Salem, Tamil Nadu, India
      </p>
    </motion.section>
  );
}

const infoStyle = {
  marginTop: "10px",
  fontSize: "1.1rem",
  color: "#1f2937"
};

export default Contact;
