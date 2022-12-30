import { PropsWithChildren } from 'react'

import * as S from './styles'

interface ButtonProps {
  Icon: React.FC
  children?: PropsWithChildren<React.ReactNode | undefined>
  onlyIcon?: boolean
  withMotion?: boolean
}

const container = {
  init: {
    width: '36px',
    transition: {
      duration: 0.48,
      delay: 0.12
    }
  },
  anim: {
    width: 'auto',
    transition: {
      duration: 0.48
    }
  }
}

const text = {
  init: {
    x: -12,
    opacity: 0,
    transition: {
      duration: 0.48
    }
  },
  anim: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.36,
      duration: 0.12
    }
  }
}

export function Button({
  children,
  Icon,
  onlyIcon = false,
  withMotion = false
}: ButtonProps) {
  if (withMotion) {
    return (
      <S.ButtonWithMotion variants={container}>
        <S.ButtonWithMotionText variants={text}>
          {children}
        </S.ButtonWithMotionText>
        <S.ButtonWithMotionIcon>
          <Icon />
        </S.ButtonWithMotionIcon>
      </S.ButtonWithMotion>
    )
  }

  if (onlyIcon) {
    return (
      <S.IconButton>
        <Icon />
      </S.IconButton>
    )
  }

  return (
    <S.Button>
      <Icon />
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  )
}
