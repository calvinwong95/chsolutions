import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { ContactLink, ContactLi } from "./ContactElements";
import Pdf from "../../assets/WongCheeHoe_Resume_2023.pdf";

const Contact = () => {
  return (
    <Box
      sx={{
        overflow: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 4,
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 5 }}
        >
          <h1 style={{ color: "white" }}>Let's have a chat!</h1>
        </Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ color: "white" }}>Email</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() =>
            (window.location.href = "mailto:calvinwongch95@gmail.com")
          }
        >
          <ContactLink>calvinwongch95@gmail.com</ContactLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ color: "white" }}>Mobile</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => (window.location.href = "tel:0196502682")}
        >
          <ContactLink>+6019 - 650 2682</ContactLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ color: "white" }}>CV</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            href={Pdf}
            target="_blank"
            sx={{
              backgroundColor: "#7325C1",

              paddingX: 10,
              "&:hover": {
                backgroundColor: "#CDCDCD",
              },
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontWeight: 600,
              }}
            >
              Download
            </Typography>
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact;
