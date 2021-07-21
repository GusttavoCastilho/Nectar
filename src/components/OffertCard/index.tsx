import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import * as S from './styles'
import BananaImg from '../../../assets/images/banana.png'
import {MaisSvg} from '../../svg'

import { items } from './mock/items'

export type ItemsProps = {
    image: ImageSourcePropType | React.ReactNode | any;
    name: string;
    description: string;
    price: string;
}

const OfftertCard: React.FC<ItemsProps> = ({ image, name, description, price }) => {
    const images: any = [
        {
            image: <BananaImg />
        }
    ]
    return (
        <S.Container>
            <S.BoxImage>
             <Image source={image} />
            </S.BoxImage>
            <S.BoxContent>
                <S.NameProduct>{name}</S.NameProduct>
                <S.DescriptionProduct>{description}</S.DescriptionProduct>
            </S.BoxContent>
                <S.BoxPrice>
                    <S.PriceProduct>{price}</S.PriceProduct>
                    <S.ButtonAdd><MaisSvg /></S.ButtonAdd>
                </S.BoxPrice>
        </S.Container>
    )
}

export default OfftertCard;