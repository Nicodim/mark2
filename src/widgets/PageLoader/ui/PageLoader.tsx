import React from 'react'
import { PageLoaderBox } from './styles'
import Loader from 'shared/ui/Loader/Loader'

const PageLoader = () => {
  return (
        <PageLoaderBox>
            <Loader/>
        </PageLoaderBox>
  )
}

export default PageLoader
