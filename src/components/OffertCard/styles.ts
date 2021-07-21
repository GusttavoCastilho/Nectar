import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    width: 173px;
    min-height: 248px;
    border: 1px solid ${Colors.borderCard};
    border-radius: 18px;
    margin-left: 20px;
`

export const BoxImage = styled.View`
    margin-top: 25px;
    align-items: center;
    height: 70px;
`

export const Image = styled.Image`
`

export const BoxContent = styled.View`
    margin-top: 33px;
    padding-left: 15px;
`

export const NameProduct = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.darkText};
`

export const DescriptionProduct = styled.Text`
    font-size: 14px;
    color: ${Colors.grayText};
    padding-top: 5px;
`

export const BoxPrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    position: relative;
    bottom: 0px;
    padding-left: 15px;
`

export const PriceProduct = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${Colors.darkText};
    padding-top: 10px;
`

export const ButtonAdd = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: ${Colors.primary};
    border-radius: 17px;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
`