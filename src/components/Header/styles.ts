import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

export const Container = styled.View`
    padding: 30px 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${Colors.darkText};
`

export const Button = styled.TouchableOpacity`
    /* font-size: 16px;
    font-weight: 600;
    color: ${Colors.primary}; */
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${Colors.primary};

`