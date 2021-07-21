import styled from "styled-components/native";
import { SearchProps } from '.'
import Colors from "../../../constants/Colors";

type ContainerProps = Pick<SearchProps, 'color' | 'border'>
type ImageProps = Pick<SearchProps, 'widthImg' | 'heightImg'>
export const Container = styled.View<ContainerProps>`
    width: 174px;
    height: 189px;
    border-radius: 18px;
    background-color: ${({ color }) => color};
    border: 1px solid ${({ border }) => border};
    align-items: center;
    justify-content: space-around;
    margin-left: 10px;
    margin-bottom: 10px;
`

export const Image = styled.Image<ImageProps>`
    width: ${({ widthImg }) => widthImg};
    height: ${({ heightImg }) => heightImg};
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.darkText};
    text-align: center;
`