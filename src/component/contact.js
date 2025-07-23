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
      <h2 style={{ fontSize: "2rem", color: "#831843" }}>Contact Me</h2>
      <p>You can reach me at:</p>
      <p style={{ fontWeight: "bold" }}>📧 vinothini4.slm@gmail.com</p>
      <p style={{ fontWeight: "bold" }}>📱 9942125687</p>
      <p>📍 Salem, Tamil Nadu</p>
    </motion.section>
  );
}

export default Contact;
