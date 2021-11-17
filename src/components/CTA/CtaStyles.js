import styled from "styled-components";

export const CtaOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff9abe;
  margin: 0px 5rem;
  @media all and (max-width: 926px) {
    margin: 0px 2rem;
    height: 2.5rem;
  }
  @media all and (min-width: 320px) and (max-width: 568px) {
    margin: 15px;
  }
  height: 4.5rem;
  padding: 15px;
  width: auto;
`;

export const CtaLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CtaRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTwo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em;
`;
