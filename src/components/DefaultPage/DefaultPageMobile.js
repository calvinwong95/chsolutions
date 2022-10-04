import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Logo from "../../assets/ch.png";
import { DefaultPageLogo, DefaultPageLogoGlow } from "./DefaultPageElements";
const DefaultPageMobile = () => {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 4,
        pb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",
          rowGap: "4rem",
        }}
      >
        <Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            sx={{
              marginBottom: 1.5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "#FFF", fontSize: 30 }}>WELCOME TO</h1>
          </Box>

          <DefaultPageLogoGlow>
            <DefaultPageLogo>
              <img src={Logo} width={"50px"} height={"50px"} alt="" />
            </DefaultPageLogo>
          </DefaultPageLogoGlow>

          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "#FFF", fontSize: 34 }}>SOLUTIONS</h1>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 10,
          }}
        >
          <h1
            style={{
              color: "#FFF",
              fontSize: 18,
              textAlign: "center",
              textDecoration: "underline",
              marginBottom: 20,
            }}
          >
            Drive your business to success with our SOLUTIONS
          </h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>LANDING PAGE</h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>WEBSITE</h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>WEBSITE MAINTENANCE</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultPageMobile;
