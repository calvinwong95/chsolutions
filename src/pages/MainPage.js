import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PageStateContext } from "../context/PageStateContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
import Solution from "./Solution";
import { Box } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const { pageState, setPageState } = useContext(PageStateContext);

  return (
    <Box
      style={{
        width: "100vw",
        backgroundColor: "#111116",
      }}
    >
      <Navbar setPageState={setPageState} />
      <Box
        className="content"
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
        }}
      >
        <Box
          sx={{
            width: matches ? "40%" : "100%",
            height: "90vh",
          }}
        >
          {pageState === "main-page" || pageState === "about-me" ? (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              sx={{ height: 1 }}
            >
              <Spline scene="https://prod.spline.design/FPQV2VLoRYVD1v3V/scene.splinecode" />
            </Box>
          ) : null}
          {pageState === "work" ? (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              sx={{ height: 1 }}
            >
              <Spline scene="https://prod.spline.design/DPYr3EM64eIGHjeS/scene.splinecode" />
            </Box>
          ) : null}

          {pageState === "contact" && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              sx={{ height: 1 }}
            >
              <Spline scene="https://prod.spline.design/7FYE-Xma1DX5gMJX/scene.splinecode" />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            backgroundColor: "#111116",
            width: matches ? "60%" : "100%",
            height: "90vh",
            overflowY: pageState === "work" ? "auto" : null,
          }}
        >
          {pageState === "main-page" && <DefaultPage />}
          {pageState === "about-me" && <AboutMe />}
          {pageState === "work" && <Solution />}
          {pageState === "contact" && <Contact />}
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
