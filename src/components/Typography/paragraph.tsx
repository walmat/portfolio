import React, { PropsWithChildren } from 'react'
import * as S from './styles'

interface ParagraphProps {
  children?: PropsWithChildren<React.ReactNode>
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <S.Paragraph>{children}</S.Paragraph>
)
