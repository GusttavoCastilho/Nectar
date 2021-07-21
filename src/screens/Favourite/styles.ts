import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`

export const Header = styled.View`
    margin-top: 60px;
    margin-bottom: 20px;
    align-items: center;
`

export const TextHeader = styled.Text`
    font-size: 20px;
    color: ${Colors.darkText};
    font-weight: 700;
`

export const Button = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`