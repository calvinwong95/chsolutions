import { Box } from "@mui/material";
import React, { useContext } from "react";
import InfoSection from "../components/InfoSection";
import MobileSection from "../components/MobileSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { PageStateContext } from "../context/PageStateContext";

const Home = () => {
  const { pageState, setPageState, mobileView, toggle, isOpen, scrollToTop } =
    useContext(PageStateContext);

  return (
    <Box sx={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
      <Navbar setPageState={setPageState} toggle={toggle} isOpen={isOpen} />

      {mobileView && <InfoSection pageState={pageState} />}
      {!mobileView && <MobileSection toggle={toggle} isOpen={isOpen} />}
    </Box>
  );
};

export default Home;
