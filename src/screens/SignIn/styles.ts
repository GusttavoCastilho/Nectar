import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

export const Container = styled.View`
    flex: 1;
`

export const ImageHeader = styled.Image`
    width: 100%;
    height: 374px;
`;

export const BoxContent = styled.View`
    align-items: center;
    margin-top: 40px;
`

export const TextHeader = styled.Text`
    font-size: 26px;
    font-weight: 600;
    line-height: 39px;
    color: ${Colors.darkText};

    padding-left: 24px;
`;

export const Diviser = styled.View`
    width: 90%;
    height: 2px;
    background-color: #E2E2E2;
    border-radius: 4px;
`;

export const Description = styled.Text`
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: ${Colors.grayTextTwo};

    padding-top: 40px;
    padding-bottom: 38px;
`;