import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutMeMobile = ({ id }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      id={id}
      sx={{
        mt: 4,
        width: "100%",
        minHeight: "100%",
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
            <h1
              style={{
                color: "#FFF",
                fontSize: 20,
                textAlign: "justify",
              }}
            >
              Graduated as Mechanical Engineer from University of Nottingham, I
              have a strong background in engineering principles and technical
              knowledge. After graduation, I honed my sales skills while working
              as a sales engineer at Sime Darby Industrial where I adapted
              business management skills.
              <br />
              <br />
              I then took my career in a new direction by teaching myself web
              development, which led to my current role as a frontend developer
              at Invoke.
              <br />
              <br />
              With my strong technical background, experience in sales and
              exceptional negotiating skills, and self-taught coding skills, I
              am willing to contribute to your organization.
            </h1>
          </Box>
        </div>
        <Box sx={{ mt: 10 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "row" : "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <h1 style={{ color: "#FFF", fontSize: 24 }}>EDUCATION</h1>
          </Box>
          <h3 style={{ color: "white", marginTop: 20, marginBottom: 5 }}>
            University Of Nottingham
          </h3>
          <h3 style={{ color: "white", marginBottom: 5 }}>
            Masters in Mechanical,Materials and Manufacturing Engineering (2014
            – 2018)
          </h3>
          <h3 style={{ color: "white", marginBottom: 30 }}>
            First Class Honors
          </h3>
          <h4 style={{ color: "white", marginTop: 20, marginBottom: 5 }}>
            • Lean Manufacturing
          </h4>
          <h4 style={{ color: "white", marginBottom: 5 }}>
            • Additive Manufacturing & 3D-Printing
          </h4>
          <h4 style={{ color: "white", marginBottom: 5 }}>
            • Management Studies 1, 2 & 3
          </h4>
          <h4 style={{ color: "white", marginBottom: 5 }}>
            • Finite Element Analysis
          </h4>
          <h4 style={{ color: "white", marginBottom: 5 }}>
            • Computational Fluid Dynamics
          </h4>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeMobile;
