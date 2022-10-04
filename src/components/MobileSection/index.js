import React from "react";
import AboutMeMobile from "../AboutMe/AboutMeMobile";
import ContactMobile from "../Contact/ContactMobile";
import DefaultPageMobile from "../DefaultPage/DefaultPageMobile";
import {
  MobileContainer,
  MobileSegment,
  MobileSpacer,
} from "./MobileSectionElements";

const MobileSection = () => {
  return (
    <MobileContainer>
      <MobileSegment>
        <DefaultPageMobile />
        <AboutMeMobile />
        <ContactMobile />
      </MobileSegment>
    </MobileContainer>
  );
};

export default MobileSection;
