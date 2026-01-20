'use client'

import { motion } from 'framer-motion'
import { useFiltersContext } from '@/providers/filters'

interface OptionsProps {
  text: string
  selected: boolean
  onClick: () => void
}

interface Style {
  x: number
  width: number
}

const styles: { [key: string]: Style } = {
  All: { x: 0, width: 50 },
  About: { x: 50, width: 74 },
  Projects: { x: 124, width: 89 },
  Media: { x: 213, width: 75 }
}

const spring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30
}

const Option = ({ text, selected, onClick }: OptionsProps) => (
  <div
    onClick={onClick}
    className="rounded-[50px] flex items-center h-8 px-4 cursor-pointer"
  >
    <p
      className={`relative text-sm z-[2] font-normal transition-opacity duration-200 text-foreground ${
        !selected ? 'hover:opacity-50' : ''
      }`}
    >
      {text}
    </p>
  </div>
)

const Filters = () => {
  const { active, options, setActive } = useFiltersContext()

  return (
    <div className="relative flex text-sm rounded-[23px] bg-foreground/5 dark:bg-transparent p-[5px] border-2 border-border min-w-[301.13px]">
      <div className="flex justify-evenly">
        <motion.div
          transition={spring}
          animate={{
            x: styles[active].x,
            width: styles[active].width
          }}
          className="absolute z-[-1] h-8 left-[5px] bg-inverted rounded-[16px]"
        />
        {options.map((el, i) => (
          <Option
            text={el}
            key={i}
            selected={active === el}
            onClick={() => setActive(el)}
          />
        ))}
      </div>
    </div>
  )
}

export default Filters
