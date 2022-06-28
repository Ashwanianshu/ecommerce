import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Purchase from './components/Purchase'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/purchase" component={Purchase} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
