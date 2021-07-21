import React from 'react'

import * as S from './styles'
import { SearchSvg } from '../../svg/index'

const Input: React.FC = () => {
  return (
    <S.Container>
      <S.Left>
        <SearchSvg />
      </S.Left>
      <S.Input placeholder="Search Store" />
    </S.Container>
  )
}

export default Input;