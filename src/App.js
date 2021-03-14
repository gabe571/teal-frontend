import react from 'react'
import layout from './components/layout'
import Profile from './components/Profile'
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
  <div>
    <Route exact path='/' component={layout}/>
    <Route path='Profile' component={Profile}/>
  </div>
  );
}

export default withRouter(App);
