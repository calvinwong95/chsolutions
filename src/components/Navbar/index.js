import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarImage,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setPageState }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo onClick={() => setPageState("default")}>
          <NavbarImage src={require("../../assets/ch.png")} alt="" />
        </NavbarLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavbarMenu>
          <NavbarLink onClick={() => setPageState("about-me")}>
            About Me
          </NavbarLink>

          <NavbarLink onClick={() => setPageState("solution")}>
            Solutions
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
