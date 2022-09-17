import React from "react";
import PlanningSolution from "../components/PlanningSolution";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Solution = () => {
  return (
    <div className="work-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="Landing Page & Website">
          <h1 style={{ color: "white", textDecoration: "underline" }}>
            {"LANDING PAGE & WEBSITE"}
          </h1>
          <h3 style={{ color: "white", marginTop: 20 }}>
            Our workflow starts with planning and structuring the layout and
            deliverables.
            <br /> Once completed, we will then move to the designing stage of
            the prototype.
            <br /> Lastly, we will develop and deliver the finalized product.
          </h3>
          <div style={{ marginTop: 50, marginBottom: 50 }}>
            <PlanningSolution />
          </div>
        </div>
        <div className="3D Animation">
          <h1 style={{ color: "white", textDecoration: "underline" }}>
            {"3D Animation"}
          </h1>
          <h3 style={{ color: "white", marginTop: 20, marginBottom: 50 }}>
            We create and design 3D elements to make your website attractive and
            improve user's experience.
            <br />
            Feel free to press the button with your keyboard!
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spline scene="https://prod.spline.design/DPYr3EM64eIGHjeS/scene.splinecode" />
          </motion.div>
        </div>
        <div className="Maintenance">
          <h1 style={{ color: "white", textDecoration: "underline" }}>
            {"Maintenance"}
          </h1>
          <h3 style={{ color: "white", marginTop: 20 }}>
            Trouble in navigating your website and needing to consistently
            update the content? <br /> No worries! <br /> We can do it for you!
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Solution;
