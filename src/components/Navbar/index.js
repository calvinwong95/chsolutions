import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarImage,
  NavbarMenu,
  NavbarLink,
} from "./NavbarElements";
import { FaConnectdevelop } from "react-icons/fa";

const Navbar = ({ setPageState, isOpen, toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo onClick={() => setPageState("default")}>
          <NavbarImage src={require("../../assets/ch.png")} alt="" />
        </NavbarLogo>
        <MobileIcon onClick={() => toggle()}>
          <FaConnectdevelop />
        </MobileIcon>
        <NavbarMenu>
          <NavbarLink onClick={() => setPageState("about-me")}>
            About Me
          </NavbarLink>

          <NavbarLink onClick={() => setPageState("solution")}>
            Experience
          </NavbarLink>

          <NavbarLink onClick={() => setPageState("contact")}>
            Contact
          </NavbarLink>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
