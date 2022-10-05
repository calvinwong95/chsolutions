import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #111116;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  max-width: 1200px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
`;

export const NavbarImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;

  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  width: 500px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavbarLink = styled.h2`
  color: white;
  display: inline-block;
  position: relative;
  font-size: 20px;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: white;
    transition: 0.3s all ease-in-out;
    transform-origin: bottom left;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
