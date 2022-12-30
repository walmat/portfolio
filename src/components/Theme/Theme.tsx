import { Switch } from 'components'
import { useFiltersContext } from 'providers'
import { getOpacity } from 'utils'

import * as S from './styles'

function Theme() {
  const { active } = useFiltersContext()

  return (
    <S.Container $opacity={getOpacity([], active)}>
      <Switch />
    </S.Container>
  )
}

export default Theme
