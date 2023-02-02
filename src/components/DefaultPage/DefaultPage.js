import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { PageStateContext } from "../../context/PageStateContext";

const DefaultPage = () => {
  const { mobileView } = useContext(PageStateContext);
  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            style={{
              marginBottom: "5rem",
              display: "flex",
              justifyContent: mobileView ? null : "center",
            }}
          >
            <h1 style={{ color: "#FFF" }}>WELCOME</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            style={{
              display: "flex",
              justifyContent: mobileView ? null : "center",
            }}
          >
            <h1 style={{ color: "#FFF", fontSize: 24 }}>CHEE HOE</h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
            alignItems: mobileView ? null : "center",
          }}
        >
          <h1 style={{ color: "#FFF", fontSize: "24px" }}>
            FRONTEND DEVELOPER
          </h1>
          <h1 style={{ color: "#FFF", fontSize: "24px" }}>
            WEB APPLICATION DEVELOPER
          </h1>
          <h1 style={{ color: "#FFF", fontSize: "24px" }}>WEBSITE CREATOR</h1>
        </motion.div>
      </div>
    </Box>
  );
};

export default DefaultPage;
