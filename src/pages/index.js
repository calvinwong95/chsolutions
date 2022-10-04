import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import InfoSection from "../components/InfoSection";
import MobileSection from "../components/MobileSection";
import Navbar from "../components/Navbar";
import { PageStateContext } from "../context/PageStateContext";

const Home = () => {
  const { pageState, setPageState, mobileView } = useContext(PageStateContext);

  return (
    <Box sx={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
      <Navbar setPageState={setPageState} />

      {mobileView && <InfoSection pageState={pageState} />}
      {!mobileView && <MobileSection />}
    </Box>
  );
};

export default Home;
