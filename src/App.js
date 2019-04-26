import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom"
import home from './containers/home';
import restaurant from './containers/restaurants';
import daftar from './containers/daftar'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/restaurant" component={restaurant} />
          <Route path="/daftar" component={daftar} />
        </Switch>
        
      </div>
    )
  }
}

export default App;