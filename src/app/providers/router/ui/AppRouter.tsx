import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Suspense, memo, useMemo } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'features/AuthByUsername'

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {

            if (route.authOnly && !isAuth) {
                return false
            }
            
            return true
        })
    }, [isAuth])

    return (
      <Routes>
          {
                routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className='page-wrapper'>
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))
            }
      </Routes>
    )
}

export default memo(AppRouter)
