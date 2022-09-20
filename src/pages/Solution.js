import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingPage from "../components/LandingPage";
import Animation from "../components/Animation";
import Maintenance from "../components/Maintenance";
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
    <div className="work-container">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {showWork === 1 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <LandingPage />
          </Box>
        )}
        {showWork === 2 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Animation />
          </Box>
        )}
        {showWork === 3 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Maintenance />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Solution;
