import react from 'react'
import layout from './components/layout'
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
  <div>
    <Route exact path='/' component={layout}/>
  </div>
  );
}

export default withRouter(App);
