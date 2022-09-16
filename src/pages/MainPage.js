import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PageStateContext } from "../context/PageStateContext";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";

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
        <div className="containerLeft"></div>
        <div className="containerRight">
          {pageState === "main-page" && <DefaultPage />}
          {pageState === "about-me" && <AboutMe />}
          {pageState === "work" && <Work />}
          {pageState === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
