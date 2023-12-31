import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import Products from './components/Products'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />

    <ProtectedRoute exact path="/products" component={Products} />

    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
