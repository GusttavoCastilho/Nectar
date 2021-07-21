import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

export const Container = styled.View`
    width: 90%;
    height: 50px;
    background-color: ${Colors.input};
    border-radius: 15px;
    flex-direction: row;
`

export const Left = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 20px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    
    font-size: 14px;
    font-weight: 600;
    color: ${Colors.grayText};
`