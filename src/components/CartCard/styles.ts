import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    width: 100%;
    height: 157px;
    border: 1px solid #E2E2E2;
    flex-direction: row;
    justify-content: space-between;
`

export const BoxImage = styled.View`
    justify-content: center;
    margin-left: 20px;
`

export const Image = styled.Image``

export const BoxContent = styled.View`
    flex-direction: column;
    /* margin-left: 40px; */
`

export const TitleProduct = styled.Text`
    padding-top: 30px;
    font-weight: bold;
    font-size: 16px;
    color: ${Colors.darkText};
`

export const DescriptionProduct = styled.Text`
    padding-top: 5px;
    color: ${Colors.grayText};
`

export const BoxQuantity = styled.View`
    flex-direction: row;
    margin-top: 12px;
    justify-content: space-around;
`

export const Button = styled.TouchableOpacity`
    width: 45.67px;
    height: 45.67px;
    border-radius: 17px;
    border: 1px solid #F0F0F0;
    align-items: center;
    justify-content: center;
`

export const Quantity = styled.Text`
    padding: 15px 10px 0px 10px;
    font-size: 16px;
`

export const BoxPrice = styled.View`
    justify-content: space-around;
    padding-right: 25px;
`

export const BoxClose = styled.View`
    align-items: flex-end;
`

export const Price = styled.View``

export const TextPrice = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${Colors.darkText};
`