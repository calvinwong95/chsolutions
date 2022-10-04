import React from "react";
import { motion } from "framer-motion";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutMeMobile = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        mt: 4,
        width: "100%",
        height: "100vh",
        padding: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h1 style={{ color: "#FFF", fontSize: 24 }}>ABOUT ME</h1>
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 50,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginTop: 2 }}>
            <h1 style={{ color: "#FFF", fontSize: 20 }}>
              CH Solutions is founded by Chee Hoe, a graduate with Masters in
              Mechanical Engineering who started his journey as a mechanical
              design engineer in a signage company.
              <br />
              <br />
              During his free time, he self taught web development and now
              ventured his career to frontend developer.
              <br />
              <br />
              With his expertise in the business field and software developing,
              he aims to understand your business model and provide solutions
              that can add value to grow your business.
            </h1>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 50,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 50 }}
          >
            <h1 style={{ color: "#FFF", fontSize: 20 }}></h1>
          </motion.div>
        </div>
      </Box>
    </Box>
  );
};

export default AboutMeMobile;
