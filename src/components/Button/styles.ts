import styled, { css } from "styled-components/native";
import COLORS from "../../../constants/Colors";
import { ButtonProps } from ".";

type TextColor = Pick<ButtonProps, 'color'>

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
  gray: () => css`
    background-color: #F2F3F2;
    color: #53B175;
  `
};

const TextModifiers = {
  white: () => css`
    color: #FFF9FF;
  `,
  green: () => css`
    color: #53B175
  `
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 353px;
  height: 67px;
  border-radius: 19px;

  align-items: center;
  justify-content: center;

  flex-direction: row;

  margin-bottom: 20px;


  ${({ backgroundColor }) => css`
    ${!!backgroundColor && WrapperModifiers[backgroundColor]}
  `}
`;

export const TextButton = styled.Text<TextColor>`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;

  padding-top: 5px;

  ${({ color }) => css`
    ${!!color && TextModifiers[color]}
  `}
`;
