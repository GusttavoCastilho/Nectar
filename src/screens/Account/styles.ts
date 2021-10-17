import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    align-items: center;
    `

export const Header = styled.View`
    margin-top: 60px;
    flex-direction: row;
    width: 100%;
    padding-left: 25px;
`

export const UserImage = styled.Image`
    width: 63.44px;
    height: 64.32px;
    border-radius: 50px;
`

export const BoxInfo = styled.View`
    flex-direction: column;
    padding-left: 20px;
`

export const Username = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #181725;
`

export const UserEmail = styled.Text`
    font-size: 16px;
    color: #7C7C7C;
`

export const Content = styled.View`
    margin-top: 40px;
`

export const ButtonBox = styled.View`
    margin-top: 40px;
`