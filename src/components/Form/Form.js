import React from "react";

import {
  Heading4Form,
  OverLord,
  RowHeader,
  HeaderContainer,
  FormH1,
  FormH5,
  WrapperGrid,
  MainForm,
  Label,
  Input,
  Textarea,
  StyledButton,
} from "./FormStyled";
const Form = () => {
  return (
    <>
      <Heading4Form>Contact Me</Heading4Form>

      <HeaderContainer>
        <OverLord>
          <RowHeader>
            <FormH1>Say Hi!</FormH1>
            <FormH5>Fill out the form below to learn more!</FormH5>
          </RowHeader>
        </OverLord>
      </HeaderContainer>

      {/* <MainForm>
        <WrapperGrid>
          <Label>Name</Label>
          <Input type="text" name="name" />
        </WrapperGrid>

        <WrapperGrid>
          <Label>Surname</Label>
          <Input type="text" name="surname" />
        </WrapperGrid>

        <WrapperGrid>
          <Label>Email Address</Label>
          <Input type="email" name="email" />
        </WrapperGrid>

        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5"></Textarea>
        </WrapperGrid>

        <WrapperGrid full>
          <StyledButton>Submit</StyledButton>
        </WrapperGrid>
      </MainForm> */}
    </>
  );
};

export default Form;
