import React from "react";
import {ImageSourcePropType} from 'react-native'
import * as S from './styles'

import { ArrowR } from '../../svg/index'

export type FavouriteProps = {
    image: ImageSourcePropType | React.ReactNode | any;
    title: string;
    description: string;
    price: string;
    widthImg: string;
    heightImg: string;
}

const CardFavourite: React.FC<FavouriteProps> = ({ image, title, description, price, widthImg, heightImg }) => {
    return (
        <S.Container>
            <S.BoxImage>
                <S.Image source={image} widthImg={widthImg} heightImg={heightImg} />
            </S.BoxImage>
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Content>
            <S.Price>
                <S.TextPrice>{price}</S.TextPrice>
                <ArrowR />
            </S.Price>
        </S.Container>
    )
} 

export default CardFavourite;