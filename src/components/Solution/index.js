import React, { useState } from "react";
import { motion } from "framer-motion";
import Experiences from "./Experiences";
import Education from "./Education";
import Skills from "./Skills";
import { Box } from "@mui/material";

const Solution = () => {
  const [showWork, setShowWork] = useState(1);
  document.addEventListener("keydown", function (event) {
    if (event.code === "Digit1") {
      setShowWork(1);
    }
    if (event.code === "Digit2") {
      setShowWork(2);
    }
    if (event.code === "Digit3") {
      setShowWork(3);
    }
  });
  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        sx={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        {showWork === 1 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Experiences />
          </Box>
        )}
        {showWork === 2 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Education />
          </Box>
        )}
        {showWork === 3 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            sx={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Skills />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Solution;
