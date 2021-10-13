import React from 'react'
import { Switch, Route } from 'react-router'

import LazyImport from './lazy'

const HomePage = LazyImport({
  loader: () => import('../pages/HomePage'),
})
const ProductListPage = LazyImport({
  loader: () => import('../pages/ProductListPage'),
})
const ProductDescriptionPage = LazyImport({
  loader: () => import('../pages/ProductDescriptionPage'),
})

const Routes = () => (
  <Switch>
    <Route component={HomePage} exact path="/" />
    <Route component={ProductListPage} exact path="/items" />
    <Route component={ProductDescriptionPage} exact path="/items/:id" />
  </Switch>
)

export default Routes
