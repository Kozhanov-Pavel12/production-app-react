import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navigation')
  const [isAuthModal, setIsAuthModal] = useState(false)

  // Ссылки на функции, которые передаем пропсами, надо сохранять
  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [isAuthModal])

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>

          <Button 
            theme={ThemeButton.CLEAR_INVERTED} 
            className={cls.links} 
            onClick={onToggleAuthModal}
          >
            {t('Войти')}
          </Button>

          <Modal isOpen={isAuthModal} onClose={onToggleAuthModal}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique asperiores accusamus cum possimus dolor corporis amet iusto nesciunt quo doloremque, praesentium nihil aspernatur laboriosam esse soluta et exercitationem obcaecati.
          </Modal>
      </div>
  )
}
