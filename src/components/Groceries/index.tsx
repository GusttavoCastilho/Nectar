import React from 'react'
import {ImageSourcePropType} from 'react-native'
import * as S from './styles'
import PulsesImg from '../../../assets/images/pulses.png'

export type GroceriesProps = {
    id?: number;
    image: ImageSourcePropType | React.ReactNode | any;
    title: string;
    color: "orange" | "green"
}

const Groceries: React.FC<GroceriesProps> = ({ image, title, color }) => {
    return (
        <S.Container color={color}>
            <S.Image source={image} />
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}

export default Groceries