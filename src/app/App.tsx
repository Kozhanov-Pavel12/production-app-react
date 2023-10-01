import { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {

  return (
      <div className={classNames('app', {}, [])}>
          <Suspense fallback="">
              <Navbar />
              <div className='content-page'>
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
