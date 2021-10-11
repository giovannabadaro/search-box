import React from 'react'

import { Switch, Route } from 'react-router'
import LazyImport from './lazy'

const Home = LazyImport({
  loader: () => import('../pages/Home'),
})
const ProductList = LazyImport({
  loader: () => import('../pages/ProductList'),
})

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={ProductList} exact path="/items" />
  </Switch>
)

export default Routes
