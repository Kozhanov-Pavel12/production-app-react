import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navigation')
  return (
    <BrowserRouter>
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Главная страница')}</AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('ИнформациЯ')}</AppLink>
          </div>
      </div>
    </BrowserRouter>
  )
}
