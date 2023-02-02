import React from "react";
import { motion } from "framer-motion";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutMe = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        overflow: "auto",
        width: "100%",
      }}
    >
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 style={{ color: "#FFF" }}>ENGINEER</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h1 style={{ color: "#FFF" }}>SALES</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <h1 style={{ color: "#FFF" }}>DEVELOPER</h1>
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
            <h1 style={{ color: "#FFF", fontSize: "24px" }}>
              Graduated as Mechanical Engineer from University of Nottingham, I
              have a strong background in engineering principles and technical
              knowledge. After graduation, I honed my sales skills while working
              as a sales engineer at Sime Darby Industrial where I adapted
              business management skills. I then took my career in a new
              direction by teaching myself web development, which led to my
              current role as a frontend developer at Invoke.
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
            <h1 style={{ color: "#FFF", fontSize: "24px" }}>
              With my strong technical background, experience in sales and
              exceptional negotiating skills, and self-taught coding skills, I
              am willing to contribute to your organization.
            </h1>
          </motion.div>
        </div>
      </Box>
    </Box>
  );
};

export default AboutMe;
