import { classNames } from 'shared/lib/classNames/classNames'

import { Theme, useTheme } from 'app/providers/ThemeProvider'

import LightIcon from '../../../assets/icons/theme-light.svg'
import DarkIcon from '../../../assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button theme={ThemeButton.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
          { theme === Theme.DARK ? <LightIcon /> : <DarkIcon /> }
      </Button>
  )
})
