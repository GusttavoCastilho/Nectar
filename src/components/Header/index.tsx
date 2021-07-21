import React from 'react'

import * as S from './styles'

type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <S.Container>
                <S.Title>{title}</S.Title>
                <S.Button onPress={() => { }}><S.TextButton>See All</S.TextButton></S.Button>
            </S.Container>
        </>
    )
}

export default Header;