import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { ContactLink } from "./ContactElements";
import Pdf from "../../assets/WongCheeHoe_Resume_2023.pdf";

const ContactMobile = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
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
          <h1 style={{ color: "white", fontSize: 24 }}>Let's have a chat!</h1>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 style={{ color: "white", fontSize: 22 }}>CV</h1>
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
                  fontWeight: 400,
                }}
              >
                Download
              </Typography>
            </Button>
          </motion.div>
        </Box>
      </Box>
      <Box sx={{ marginTop: 30 }}>
        Click the top icon to see my work experiences
      </Box>
    </Box>
  );
};

export default ContactMobile;
