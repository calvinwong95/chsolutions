import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "white" }}>
          Mechanical Engineer `{">"}` Sales `{">"}` Software Developer
        </h1>
      </div>
      <div style={{ marginTop: "100px", width: "500px" }}>
        <h2 style={{ color: "white" }}>
          I'm Chee Hoe, a mechanical engineer that ventured into sales
          engineering and now a software developer.
        </h2>
        <br />
        <h2 style={{ color: "white" }}>
          My goal is to bring value to your company by understanding your
          business model and develop a software that enhances it.
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
