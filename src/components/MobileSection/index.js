import React from "react";
import Home from "../../pages";
import AboutMe from "../../pages/AboutMe";
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

        {/* <AboutMe /> */}
      </MobileSegment>
    </MobileContainer>
  );
};

export default MobileSection;
