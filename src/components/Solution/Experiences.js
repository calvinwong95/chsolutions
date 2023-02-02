import { Box } from "@mui/material";
import React from "react";

const Experiences = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textDecoration: "underline",
          textAlign: "start",
        }}
      >
        {"WORK EXPERIENCES"}
      </h1>
      {/* INVOKE */}
      <Box
        style={{
          marginTop: 30,

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ fontSize: "20px" }}>INVOKE SDN. BHD.</h4>

        <h4 style={{ fontSize: "20px", marginRight: 20 }}>2021 - Present</h4>
      </Box>
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
          Frontend React Developer
        </h3>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
            Adnexio EDU
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Designed and implemented customizable components for web
            applications using React.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Adhered to Agile methodologies, leading and participating in
            sprint planning and execution, resulting in efficient and effective
            delivery of projects.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Collaborated closely with backend engineers to integrate APIs and
            ensure seamless data flow between the frontend and backend of web
            applications.
          </h3>
        </Box>
        <Box
          sx={{
            mt: 4,
          }}
        >
          <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
            Adnexio HR Tech
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Performed product management responsibilities, including planning,
            coordinating and conducting User Acceptance Testing (UAT),
            contributing to the success and delivery of web applications.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Designed and executed UI/UX wireframes for HR Leave Management
            System, ensuring a seamless and user-centered experience for
            clients.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Developed customizable components using React.js and React Native,
            ensuring versatile and cross-platform solutions for managing their
            HR processes.
          </h3>
        </Box>
        <Box
          sx={{
            mt: 4,
          }}
        >
          <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
            Website Initiatives
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Improved the website process flow by structuring and organizing a
            Standard Operating Procedure (SOP), resulting in a more efficient
            and user-friendly experience and increased engagement, leading to
            higher conversions for the company.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Designed and implemented pricing packages as part of improving the
            website process flow, resulting in clearer and more accessible
            pricing options for customers
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Conducted research and evaluated various plugins and tools to
            enhance the website's features, ultimately improving the client
            experience while reducing costs for the company.
          </h3>
        </Box>
      </Box>

      {/* SIME DARBY */}
      <Box
        style={{
          marginTop: 100,

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ fontSize: "20px" }}>SIME DARBY INDUSTRIAL SDN. BHD.</h4>

        <h4 style={{ fontSize: "20px", marginRight: 20 }}>2019 - 2021</h4>
      </Box>
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
          Sales and Application Engineer
        </h3>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <h3 style={{ color: "white", marginTop: 20, fontSize: "20px" }}>
            As a sales and application engineer for Viking Pumps and Pulsafeeder
            Pumps in the southern region, I am responsible for generating sales
            and serving as the single point of contact for clients.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Achieved $1.2 million in sales with an average margin of 24% for
            the company.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Acted as the single point of contact for clients, offering
            technical support and assistance throughout the sales process.
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Utilized strong negotiation skills to close deals and maintain
            positive relationships with clients
          </h3>
          <h3 style={{ color: "white", marginTop: 20, fontSize: "16px" }}>
            • Built strong, trust-based relationships with my clients by taking
            the time to understand their needs and providing them with
            personalized, solution-oriented customer service.
          </h3>
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;
