import styled from "styled-components";
// the images are gonna be hardcode for now,
//  ask Chris/Matt about how to change the img relative
// to what my mom post via admin pannel
import { FaInstagramSquare, FaFacebookF } from "react-icons/fa";

export const BgContainer = styled.div`
  width: auto;
  height: 50vh;
  background-color: #e87da3;
  display: flex;
  padding: 5%;
  flex-direction: column;
`;

export const FooterH1 = styled.h1`
  margin: 0 auto;
`;
export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const IgIcon = styled(FaInstagramSquare)`
  padding: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
`;
export const FbIcon = styled(FaFacebookF)`
  padding: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
`;
// export const MailIcon = styled(AiOutlineMail)``;
