import React from 'react'
import Loadable from 'react-loadable'
import Loader from '../components/Loader'

const LoadingComponent = () => <Loader />

const LazyImport = (opts) =>
  Loadable({
    ...opts,
    loading: LoadingComponent,
  })

export default LazyImport
