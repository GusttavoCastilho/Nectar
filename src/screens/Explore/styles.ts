import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`

export const Header = styled.View`
    align-items: center;
    margin-top: 60px;
`

export const TextHeader = styled.Text`
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.darkText};
`

export const BoxContent = styled.View`
    margin-left: 10px;
    margin-top: 20px;
`