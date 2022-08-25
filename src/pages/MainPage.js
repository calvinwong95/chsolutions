import React, { useState } from "react";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [pageState, setPageState] = useState("default");
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
          backgroundColor: "red",
        }}
      >
        <div className="containerLeft"></div>
        <div className="containerRight"></div>
      </div>
    </div>
  );
};

export default MainPage;
