import React from 'react'

import {View, Text} from 'react-native'
import CartCard from '../../components/CartCard'
import * as S from './styles'
import { items } from '../../components/CartCard/mock/items'

const Cart: React.FC = () => {
    return (
        <S.Container>
            <S.Header>
                <S.TitleHeader>My Cart</S.TitleHeader>
            </S.Header>
            {items.map(( item, index ) => {
                return <CartCard image={item.image} title={item.title} description={item.description} price={item.price} />
            })}
        </S.Container>
    )
}

export default Cart