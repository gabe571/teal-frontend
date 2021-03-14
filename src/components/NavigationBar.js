import React, { Component } from 'react';
import { NavLink, withRouter, useHistory } from 'react-router-dom';

class NavigationBar extends Component {
    
    handleLogoutClick = (e) => {
      e.preventDefault()
      localStorage.clear();
      this.props.history.push("/");
       console.log(localStorage)
      };
  
    render() {
        return (
            <div className="navbar">
    <ul>
         <li>
           <NavLink to='/layout' exact>Home</NavLink>
         </li>
         <li>
           <NavLink to='/Profile'>Profile</NavLink>
         </li>
         {/* <li>
         <a id="logout" href="/" onClick={this.handleLogoutClick}>Logout</a>
         </li> */}
       </ul>
            </div>
        )
    }
}

export default withRouter(NavigationBar)
