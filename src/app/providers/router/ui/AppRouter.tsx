import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageWrapper } from 'app/styles/styles'
import PageLoader from 'widgets/PageLoader/ui/PageLoader'

const AppRouter = () => {
  return (

        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader/>}>
                            <PageWrapper>
                                {element}
                            </PageWrapper>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>

  )
}

export default AppRouter
