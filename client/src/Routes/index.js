import React from 'react'

import { Switch, Route } from 'react-router'
import LazyImport from './lazy'

const Home = LazyImport({
  loader: () => import('../pages/Home'),
})

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
  </Switch>
)

export default Routes
