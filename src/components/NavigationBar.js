import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom';

class NavigationBar extends Component {
    
    render() {
        return (
            <div className="navbar">
    <ul>
         <li>
           <NavLink className='nav' i class="fa fa-fw fa-home fa-3x" to='/layout'> </NavLink>
         </li>
         <br />
         <br />
         <li>
           <NavLink className='nav'i class="fas fa-id-card fa-3x" to='/Profile'>  </NavLink>
         </li>
       </ul>
            </div>
        )
    }
}

export default withRouter(NavigationBar)
