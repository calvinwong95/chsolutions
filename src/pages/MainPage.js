import React, { useContext, Suspense } from "react";
import Navbar from "../components/Navbar";
import { PageStateContext } from "../context/PageStateContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
import Solution from "./Solution";
import { Box } from "@mui/material";

import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const { pageState, setPageState } = useContext(PageStateContext);

  return (
    <Box
      style={{
        backgroundColor: "#111116",
      }}
    >
      <Box
        style={{
          width: "100%",
          minWidth: "400px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Navbar setPageState={setPageState} />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          height: "100%",
          width: "100%",
        }}
      >
        <Suspense fallback={<h1 style={{ color: "#111116" }}>Loading</h1>}>
          <Box
            style={{
              width: matches ? "50%" : "100%",
              height: "100vh",
            }}
          >
            {pageState === "main-page" || pageState === "about-me" ? (
              <Box
                style={{ height: "100%", width: "100%" }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Spline scene="https://prod.spline.design/FPQV2VLoRYVD1v3V/scene.splinecode" />
              </Box>
            ) : null}
            {pageState === "work" ? (
              <Box
                style={{ height: "100%", width: "100%" }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Spline scene="https://prod.spline.design/DPYr3EM64eIGHjeS/scene.splinecode" />
              </Box>
            ) : null}
            {pageState === "contact" && (
              <Box
                style={{ height: "100%", width: "100%" }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Spline scene="https://prod.spline.design/7FYE-Xma1DX5gMJX/scene.splinecode" />
              </Box>

          </Box>
        </Suspense>

        <Box
          style={{
            width: matches ? "50%" : "100%",
            height: "100vh",
            backgroundColor: "#111116",
            overflowY: "auto",
            paddingBottom: "1rem",
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
