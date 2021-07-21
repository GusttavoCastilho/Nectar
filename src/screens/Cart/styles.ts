import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`

export const Header = styled.View`
    margin-top: 60px;
    margin-bottom: 20px;
    align-items: center;
`

export const TitleHeader = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.darkText};
`