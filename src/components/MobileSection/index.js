import React from "react";
import AboutMeMobile from "../AboutMe/AboutMeMobile";
import ContactMobile from "../Contact/ContactMobile";
import DefaultPageMobile from "../DefaultPage/DefaultPageMobile";
import Sidebar from "../Sidebar";
import { MobileContainer, MobileSegment } from "./MobileSectionElements";

const MobileSection = ({ isOpen, toggle }) => {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MobileContainer>
        <MobileSegment>
          <DefaultPageMobile id="home" />
          <AboutMeMobile id="about" />
          <ContactMobile id="contact" />
        </MobileSegment>
      </MobileContainer>
    </>
  );
};

export default MobileSection;
