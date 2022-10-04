import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { ContactLink, ContactLi } from "./ContactElements";

const ContactMobile = () => {
  return (
    <Box
      sx={{
        overflow: "auto",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <h1 style={{ color: "white", fontSize: 24 }}>
            Ready To Collaborate?
          </h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 style={{ color: "white", fontSize: 22 }}>Email</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() =>
              (window.location.href = "mailto:ch.devsolutions@gmail.com")
            }
          >
            <ContactLink>ch.devsolutions@gmail.com</ContactLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 style={{ color: "white", fontSize: 22 }}>Mobile</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => (window.location.href = "tel:0196502682")}
          >
            <ContactLink>+6019 - 650 2682</ContactLink>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMobile;
