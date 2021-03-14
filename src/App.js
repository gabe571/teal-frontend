import react from 'react'
import layout from './components/layout'
import Profile from './components/Profile'
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import React from 'react';
import Teal from './components/Teal'

class App extends React.Component {

  render() {
    return (
      

    <div className="App">
      <Teal />
  <Switch>
  <Route exact path='/layout' component={layout}/>
  <Route path="/Profile" component={Profile}/>
</Switch>
</div>
    );
  }
}
export default withRouter(App);