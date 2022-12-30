import styled from 'styled-components'

export const Container = styled.div<{ $opacity: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.card.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
  opacity: ${({ $opacity }) => $opacity};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`
