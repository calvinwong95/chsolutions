import styled from "styled-components";

export const ContactLink = styled.h1`
  color: white;
  font-size: 24px;
  display: inline-block;
  position: relative;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      90deg,
      rgba(155, 66, 210, 1) 0%,
      rgba(173, 58, 140, 1) 100%
    );
    transition: 0.3s all ease-in-out;
    transform-origin: bottom left;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
