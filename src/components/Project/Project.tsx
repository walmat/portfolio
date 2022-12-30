import { Close, Heading, Paragraph } from 'components'
import { useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'

import * as S from './styles'

const button = {
  initial: {
    scale: 1
  },
  animate: {
    scale: 1.1
  }
}

const container = {
  initial: {
    y: 0
  },
  animate: {
    y: 20,
    transition: {
      duration: 0.24
    }
  }
}

interface ProjectProps {
  name: string
  description: string
}

function Project({
  name = 'Nebula',
  description = 'test somee strings'
}: ProjectProps) {
  const animation = useAnimation()
  const { push } = useRouter()
  const back = () => push('/')

  return (
    <>
      <S.Button
        onTap={back}
        animate={animation}
        variants={button}
        onHoverStart={() => animation.start('animate')}
        onHoverEnd={() => animation.start('initial')}
      >
        <Close />
      </S.Button>

      <S.Wrapper animate={animation} variants={container}>
        <Heading>{name}</Heading>
        <Paragraph>{description}</Paragraph>
      </S.Wrapper>
    </>
  )
}

export default Project
