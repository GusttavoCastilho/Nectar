import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { FavouriteProps } from '.'

type ImageProps = Pick<FavouriteProps, 'widthImg' | 'heightImg'>

export const Container = styled.View`
    width: 100%;
    height: 115px;
    border: 1px solid #E2E2E2;
    flex-direction: row;
    justify-content: space-between;
`
export const BoxImage = styled.View`
    justify-content: center;
    margin-left: 30px;
`

export const Image = styled.Image<ImageProps>`
    width: ${({ widthImg }) => widthImg};
    height: ${({ heightImg }) => heightImg};
`

export const Content = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.darkText};
`

export const Description = styled.Text`
    font-size: 14px;
    color: ${Colors.grayText};
    padding-top: 5px;
`

export const Price = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 26px;
`

export const TextPrice = styled.Text`
    padding-right: 16px;
    font-size: 16px;
    color: ${Colors.darkText};
`