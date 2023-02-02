import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Logo from "../../assets/ch.png";
import { DefaultPageLogo, DefaultPageLogoGlow } from "./DefaultPageElements";
const DefaultPageMobile = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        p: 2,
        display: "flex",
        minHeight: "100vh",
        alignItems: "flex-start",
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
            <h1 style={{ color: "#FFF", fontSize: 30 }}>WELCOME </h1>
          </Box>

          <DefaultPageLogoGlow>
            <DefaultPageLogo>
              <img src={Logo} width={"50px"} height={"50px"} alt="" />
            </DefaultPageLogo>
          </DefaultPageLogoGlow>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
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
              fontSize: 24,
              textAlign: "center",

              marginBottom: 20,
            }}
          >
            CHEE HOE
          </h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>FRONTEND DEVELOPER</h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>
            WEB APPLICATION DEVELOPER
          </h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>WEBSITE MAINTENANCE</h1>
        </Box>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
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
              fontSize: 24,
              textAlign: "center",
              textDecoration: "underline",
              marginBottom: 20,
            }}
          >
            PROFESSIONAL SKILLS
          </h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>HTML, CSS, JAVASCRIPT</h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>TAILWIND, MATERIAL UI</h1>
          <h1 style={{ color: "#FFF", fontSize: 20 }}>UI/UX DESIGN, FIGMA</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultPageMobile;
