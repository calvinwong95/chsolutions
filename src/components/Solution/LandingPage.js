import { Box, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        {"LANDING PAGE & WEBSITE"}
      </h1>
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "18px" }}>
          We specialize in creating minimalist website design that helps your
          business stand out from the rest.
        </h4>
        <br />
        <br />
        <h4 style={{ fontSize: "18px" }}>
          What we want to achieve for your website:
        </h4>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <h4 style={{ fontSize: "16px" }}>- Target audiences</h4>
          <h4 style={{ fontSize: "16px" }}>
            - Values that your company brings
          </h4>
          <h4 style={{ fontSize: "16px" }}>- Content that engages users</h4>
          <h4 style={{ fontSize: "16px" }}>- Call to Action Plan</h4>
        </Box>
        <h3 style={{ color: "white" }}>
          Our workflow starts with planning and structuring the layout and
          deliverables based on your requirements.
        </h3>
        <Box
          sx={{
            mt: 2,
            width: 250,
            height: 300,
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <h3 style={{ color: "#111116" }}>1. Planning deliverables</h3>
          <h3 style={{ color: "#111116" }}>2. Objectives</h3>
          <h3 style={{ color: "#111116" }}>3. Target Market</h3>
          <h3 style={{ color: "#111116" }}>4. Layout of Website</h3>
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "white", marginTop: 20 }}>
          Once completed, we will then move to the designing stage of the
          prototype. We will create the mockup and wireframe of your design.
        </h3>
        <Box
          sx={{
            mt: 2,
            width: 250,
            height: 250,
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: 1,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                backgroundColor: "lightgray",
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            ></Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: 150,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "lightgray",
                    width: 70,
                    height: 10,
                    borderRadius: 5,
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: "lightgray",
                    width: 70,
                    height: 10,
                    borderRadius: 5,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: 70,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: 70,
                  height: 70,
                  borderRadius: 2,
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "lightgray",
                width: 140,
                height: 85,
                borderRadius: 2,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: 1,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "lightgray",
                width: 140,
                height: 60,
                borderRadius: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: 70,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: 70,
                  height: 40,
                  borderRadius: 2,
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "white", marginTop: 20 }}>
          Lastly, we will develop and deliver the finalized product.
        </h3>
        <Box
          sx={{
            mt: 2,
            width: 250,
            height: 250,
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Box
            className="top-row"
            sx={{
              width: 1,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to right bottom, #6a3093, #FFFFFF)",
                backgroundSize: 50,
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            ></Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "gray",
                  width: 150,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "gray",
                    width: 70,
                    height: 10,
                    borderRadius: 5,
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: "gray",
                    width: 70,
                    height: 10,
                    borderRadius: 5,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="mid-row"
            sx={{
              width: 1,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
              <Box
                sx={{
                  backgroundColor: "gray",
                  width: 70,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right bottom, #005AA7, #FFFDE4)",
                  width: 70,
                  height: 70,
                  borderRadius: 2,
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                background:
                  "linear-gradient(to right bottom, #005AA7, #FFFDE4)",
                width: 140,
                height: 80,
                borderRadius: 2,
              }}
            ></Box>
          </Box>
          <Box
            className="bottom-row"
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to right bottom, #430089, #82ffa1)",
                width: 140,
                height: 60,
                borderRadius: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
              <Box
                sx={{
                  backgroundColor: "gray",
                  width: 70,
                  height: 10,
                  borderRadius: 5,
                }}
              ></Box>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right bottom, #430089, #82ffa1)",
                  width: 70,
                  height: 40,
                  borderRadius: 2,
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
