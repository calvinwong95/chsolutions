import { Box } from "@mui/material";
import React from "react";

const Maintenance = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        {"MAINTENANCE"}
      </h1>
      <h3 style={{ color: "white", marginTop: 20 }}>
        Trouble in navigating your website and needing to consistently update
        the content? <br /> No worries! <br /> We can do it for you!
      </h3>

      <h1 style={{ color: "white", marginTop: 20, fontSize: 24 }}>
        1. WordPress Maintenance
      </h1>
      <h1 style={{ color: "white", marginTop: 20, fontSize: 24 }}>
        2. Woocommerce Maintenance
      </h1>
      <h1 style={{ color: "white", marginTop: 20, fontSize: 24 }}>
        3. Content Updates
      </h1>
    </Box>
  );
};

export default Maintenance;
