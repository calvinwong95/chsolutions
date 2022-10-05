import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #111116;
  display: flex;

  padding: 2rem;
  padding-top: 3rem;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(AiOutlineRollback)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
`;

export const Design = styled.img``;
