import { Box } from "@mui/material";
import React from "react";
import DefaultPage from "../../../src/components/DefaultPage/DefaultPage.js";
import {
  InfoContainer,
  InfoWrapper,
  Column1,
  Column2,
} from "./InfoSectionElements";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AboutMe from "../AboutMe/AboutMe.js";
import Solution from "../Solution";
import Contact from "../Contact";

const InfoSection = ({ pageState }) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <Column1>
            {pageState === "default" || pageState === "about-me" ? (
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
            {pageState === "solution" ? (
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
            )}
          </Column1>
          <Column2>
            {pageState === "default" && <DefaultPage />}
            {pageState === "about-me" && <AboutMe />}
            {pageState === "solution" && <Solution />}
            {pageState === "contact" && <Contact />}
          </Column2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
