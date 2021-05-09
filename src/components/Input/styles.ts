import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

export const Container = styled.View`
    width: 90%;
    height: 70px;

    margin-top: 20px;
`

export const Label = styled.Text`
    font-size: 16px;
    font-weight: 600;
    line-height: 29px;
    color: ${Colors.grayText};
`

export const TextInput = styled.TextInput`
    width: 100%;
    height: 40px;
    border-bottom-width: 2px;
    border-color: #E2E2E2;
`