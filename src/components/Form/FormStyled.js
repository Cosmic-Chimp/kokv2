import styled from "styled-components";
import Wave from "../assets/wave.svg";
// import { css } from "styled-components";

export const Heading4Form = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: gray;s */
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  flex-direction: column;
`;
export const FormH1 = styled.h2`
  color: white;
`;
export const FormH5 = styled.h5`
  color: white;
`;
export const OverLord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 24rem;
  min-width: 15rem; */
  background: #f5c3d7;
`;
export const RowHeader = styled.div`
  padding: 1.5em 2.5em;
  border-bottom: 1px solid #ccc;
  color: #fff;
  max-width: 24rem;
  min-width: 15rem;
  background-image: url(${Wave});
  background-repeat: no-repeat;
  background-position: bottom;
`;

// TESTINGGG
// export const WrapperGrid = styled.div`
//   ${(props) =>
//     props.full &&
//     css`
//       grid-column: 1 / 3;
//     `}
// `;

// export const MainForm = styled.form`
//   display: grid;
//   grid-template-columns: repeat(5, 150px);
//   grid-gap: 1rem;
//   grid-template-rows: repeat(5, 100px);
//   align-items: center;
//   justify-items: center;
// `;

// export const Input = styled.input`
//   border: 1px solid #e6343b;
//   padding: 1em;
//   max-width: 100%;
// `;

// export const Label = styled.label`
//   display: block;
// `;

// export const Textarea = styled.textarea`
//   border: 1px solid #e6343b;
//   padding: 1em;
//   max-width: 100%;
// `;

// export const StyledButton = styled.button`
//   background: #e6343b;
//   border: 0;
//   color: #fff;
//   padding: 1em;
//   text-transform: uppercase;
//   max-width: 100%;

//   &:hover,
//   &:focus {
//     background: #b8161f;
//     color: #fff;
//     outline: 0;
//     transition: background-color 2s ease-out;
//   }
// `;
