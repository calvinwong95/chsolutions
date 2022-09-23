import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
          rowGap: 50,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ color: "white" }}>Ready to collaborate?</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ color: "white" }}>Email</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() =>
            (window.location.href = "mailto:ch.devsolutions@gmail.com")
          }
        >
          <h2 className="contact-button">ch.devsolutions@gmail.com</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ color: "white" }}>Mobile</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => (window.location.href = "tel:0196502682")}
        >
          <h2 className="contact-button">+6019 - 650 2682</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
