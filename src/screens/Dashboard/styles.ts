import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
    flex: 1;
    /* width: 100%;
    min-height: 100%; */
    flex-direction: column;
    background-color: ${Colors.white};
`;

export const Header = styled.View`
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
`
export const LocationHeader = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${Colors.grayTextDark};
    padding-top: 8px;
`

export const BoxSearch = styled.View`
    align-items: center;
    margin-top: 20px;
`

export const BoxBanner = styled.View`
    align-items: center;
    margin-top: 20px;
`

export const Image = styled.Image`
    width: 90%;
    height: 114px;
`