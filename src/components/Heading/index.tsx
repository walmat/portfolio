import React, { PropsWithChildren } from 'react'
import * as S from './styles'

interface HeadingProps {
  children: PropsWithChildren<React.ReactNode>
}

export const Heading = ({ children }: HeadingProps) => <S.H2>{children}</S.H2>
