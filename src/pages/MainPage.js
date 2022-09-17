import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PageStateContext } from "../context/PageStateContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
import Solution from "./Solution";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const MainPage = () => {
  const { pageState, setPageState } = useContext(PageStateContext);

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#111116" }}
    >
      <Navbar setPageState={setPageState} />
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "90vh",
        }}
      >
        <div className="containerLeft">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Spline scene="https://prod.spline.design/FPQV2VLoRYVD1v3V/scene.splinecode" />
          </motion.div>
        </div>
        <div className="containerRight">
          {pageState === "main-page" && <DefaultPage />}
          {pageState === "about-me" && <AboutMe />}
          {pageState === "work" && <Solution />}
          {pageState === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
