import { useMedium, Item } from 'hooks'
import { createContext, PropsWithChildren, useContext } from 'react'

const MediumContext = createContext<Item | undefined>({} as Item)

interface MediumProviderProps {
  initialState?: Item
  children: PropsWithChildren<React.ReactNode>
}

export const MediumProvider = ({
  initialState,
  children
}: MediumProviderProps) => {
  const { post } = useMedium(initialState)

  return (
    <MediumContext.Provider value={post}>{children}</MediumContext.Provider>
  )
}

export const useMediumContext = () => useContext(MediumContext)
