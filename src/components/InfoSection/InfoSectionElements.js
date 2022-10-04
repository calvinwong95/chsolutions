import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #111116;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  min-width: 360px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  display: block;
  padding: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Column2 = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
