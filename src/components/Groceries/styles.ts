import styled, { css } from 'styled-components/native'
import Colors from '../../../constants/Colors'

import { GroceriesProps } from '.'

type ContainerProps = Pick<GroceriesProps, 'color'>

const WrapperModifiers = {
    orange: () => css`
        background-color: ${Colors.orange};
    `,
    green: () => css`
        background-color: ${Colors.green};
        margin-right: 20px;
    `
}

export const Container = styled.View<ContainerProps>`
${({ color }) => css`
    width: 248px;
    height: 105px;
    background-color: ${Colors.orange};
    border-radius: 18px;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    ${!!color && WrapperModifiers[color]}
`}
`;

export const Image = styled.Image`
    margin-left: 17px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${Colors.grayTextTwo};
    padding-left: 15px;
`