import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const DefaultPage = () => {
  return (
    <Box className="default-page-container" sx={{ p: 5 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: "4rem",
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <h1 style={{ color: "#FFF" }}>WELCOME TO</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <h1 style={{ color: "#FFF", fontSize: 50 }}>CH SOLUTIONS</h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
        >
          <h1
            style={{ color: "#FFF", fontSize: 25, textDecoration: "underline" }}
          >
            Drive your business to success with our SOLUTIONS
          </h1>
          <h1 style={{ color: "#FFF", fontSize: 24 }}>LANDING PAGE</h1>
          <h1 style={{ color: "#FFF", fontSize: 24 }}>WEBSITE</h1>
          <h1 style={{ color: "#FFF", fontSize: 24 }}>
            WEBSITE CONTENT MAINTENANCE
          </h1>
        </motion.div>
      </div>
    </Box>
  );
};

export default DefaultPage;
