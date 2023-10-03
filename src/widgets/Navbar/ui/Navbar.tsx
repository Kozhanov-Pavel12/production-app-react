import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal, getUserAuthData } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navigation')
  const [isAuthModal, setIsAuthModal] = useState(false)

  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  // Ссылки на функции, которые передаем пропсами, надо сохранять
  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowAuthModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button 
          theme={ThemeButton.CLEAR_INVERTED} 
          className={cls.links} 
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>

          <Button 
            theme={ThemeButton.CLEAR_INVERTED} 
            className={cls.links} 
            onClick={onShowAuthModal}
          >
            {t('Войти')}
          </Button>

          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal}/>}
      </div>
  )
}
