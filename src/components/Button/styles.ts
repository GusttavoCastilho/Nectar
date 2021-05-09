import styled, { css } from "styled-components/native";
import COLORS from "../../../constants/Colors";
import { ButtonProps } from ".";

const WrapperModifiers = {
  green: () => css`
    background-color: ${COLORS.primary};
  `,
  lightBlue: () => css`
    background-color: ${COLORS.lightBlue};
  `,
  darkBlue: () => css`
    background-color: ${COLORS.darkBlue};
  `,
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 353px;
  height: 67px;
  border-radius: 19px;

  align-items: center;
  justify-content: center;

  flex-direction: row;

  margin-bottom: 10px;


  ${({ backgroundColor }) => css`
    ${!!backgroundColor && WrapperModifiers[backgroundColor]}
  `}
`;

export const TextButton = styled.Text`
  color: ${COLORS.white};
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;

  padding-top: 5px;
`;
