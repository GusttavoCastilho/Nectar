import React from "react";

import { TextInputProps } from "react-native";

import { Container, Label, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <TextInput />
      </Container>
    </>
  );
};

export default Input;
