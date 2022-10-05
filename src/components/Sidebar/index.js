import { Box } from "@mui/material";

import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  Design,
} from "./SidebarElements";
import ContactMePicture from "../../assets/ContactMe.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Box sx={{ mb: 2 }}>
          <h1 style={{ textAlign: "center" }}>SOLUTIONS</h1>
        </Box>
        {/* Landing Page */}
        <Box sx={{ width: "100%" }}>
          <h4
            style={{
              textDecoration: "underline",
              fontSize: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Landing Page and Website
          </h4>
          <h4 style={{ textAlign: "center", fontSize: "18px" }}>
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
            }}
          >
            <h4 style={{ fontSize: "16px" }}>- Target audiences</h4>
            <h4 style={{ fontSize: "16px" }}>
              - Values that your company brings
            </h4>
            <h4 style={{ fontSize: "16px" }}>- Content that engages users</h4>
            <h4 style={{ fontSize: "16px" }}>- Call to Action Plan</h4>
          </Box>
        </Box>
        {/* 3D Animation */}
        <Box sx={{ mt: 10 }}>
          <h4
            style={{
              textDecoration: "underline",
              fontSize: "20px",
              marginBottom: "4px",
              textAlign: "center",
            }}
          >
            3D Animation
          </h4>
          <h4 style={{ fontSize: "18px", textAlign: "center" }}>
            We customize and create 3D components to help your website stand
            out!
          </h4>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Design
              src={ContactMePicture}
              width="250px"
              height="250px"
              alt=""
            />
          </Box>
        </Box>
        {/* Maintenance */}
        <Box sx={{ mt: 10 }}>
          <h4
            style={{
              textDecoration: "underline",
              fontSize: "20px",
              marginBottom: "4px",
              textAlign: "center",
            }}
          >
            Maintenance
          </h4>
          <h3
            style={{
              color: "white",
              marginTop: 20,
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Trouble in navigating your website and needing to consistently
            update the content? <br /> <br />
            No worries! <br /> <br /> We can do it for you!
          </h3>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                marginTop: 20,
                fontSize: "16px",
              }}
            >
              - WordPress Maintenance
            </h1>
            <h1 style={{ fontSize: "16px" }}>- Woocommerce Maintenance</h1>
            <h1 style={{ fontSize: "16px" }}>- Content Updates</h1>
          </Box>
        </Box>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
