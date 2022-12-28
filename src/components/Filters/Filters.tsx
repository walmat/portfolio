import { AnimateSharedLayout } from 'framer-motion'

import { useFiltersContext } from 'providers'

import * as S from './styles'

interface OptionsProps {
  text: string
  selected: boolean
  onClick: () => void
}

interface Style {
  left: string
  width: string
}

const styles: { [key: string]: Style } = {
  All: { left: '5px', width: '50px' },
  About: { left: '55px', width: '74px' },
  Projects: { left: '129px', width: '89px' },
  Media: { left: '218px', width: '75px' }
}

const Option = ({ text, selected, onClick }: OptionsProps) => (
  <S.Option onClick={onClick}>
    <S.OptionText $selected={selected}>{text}</S.OptionText>
  </S.Option>
)

const Filters = () => {
  const { active, options, setActive } = useFiltersContext()

  return (
    <S.Container>
      <S.Wrapper>
        <AnimateSharedLayout>
          <S.Highlight
            transition={{ type: 'spring', duration: 0.12 }}
            animate={{ left: styles[active].left, width: styles[active].width }}
          />
          {options.map((el, i) => (
            <Option
              text={el}
              key={i}
              selected={active === el}
              onClick={() => setActive(el)}
            />
          ))}
        </AnimateSharedLayout>
      </S.Wrapper>
    </S.Container>
  )
}

export default Filters
