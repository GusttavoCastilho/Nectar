import styled from 'styled-components/native'
import { MenuAccountProps } from '.'

type ImageProps = Pick<MenuAccountProps, 'widthImg' | 'heightImg'>

export const Container = styled.View`
    width: 100%;
    height: 62px;
    flex-direction: row;
    position: relative;
    border-top-width: 1px;
    border-color: #E2E2E2;
    `

export const BoxIcon = styled.View`
    padding-left: 26px;
`

export const Content = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`

export const Icon = styled.Image<ImageProps>`
    width: ${({ widthImg }) => widthImg};
    height: ${({ heightImg }) => heightImg};
`

export const BoxName = styled.View``

export const Name = styled.Text`
    padding-left: 20px
`

export const Next = styled.Image`
    width: 8.4px;
    height: 14px;
`

export const BoxNext = styled.View`
    position: absolute;
    right: 25px;
`