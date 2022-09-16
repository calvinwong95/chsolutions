import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 50,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 style={{ color: "#FFF", fontSize: 24 }}>MECHANICAL ENGINEER</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h1 style={{ color: "#FFF", fontSize: 24 }}>SALES</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <h1 style={{ color: "#FFF", fontSize: 24 }}>FRONTEND DEVELOPER</h1>
        </motion.div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 50,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: 50 }}
        >
          <h1 style={{ color: "#FFF", fontSize: 20 }}>
            CH Solutions is founded by Chee Hoe, a graduate with Masters in
            Mechanical Engineering who started his journey as a mechanical
            design engineer in a signage company.
            <br />
            <br />
            He later on developed interest in engineering sales which lead him
            to work in Sime Darby Industrial selling pump equipments for clients
            such as Hershey Malaysia, IOI Bunge Loders, Palmaju, PrefChem.
            <br />
            <br />
            During his free time, he self taught web development and thus now
            ventured his career to frontend developer.
          </h1>
        </motion.div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 50,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: 50 }}
        >
          <h1 style={{ color: "#FFF", fontSize: 20 }}>
            With his expertise in the business field and software developing, he
            aims to understand your business model and provide solutions that
            can add value to grow your business.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
