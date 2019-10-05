import React from 'react';
import './side-nav.scss';
import { NavLink } from 'react-router-dom';


/**
 * @description - component to load the sidenav
 * @function SideNav
 */
export const SideNav = props => {

  return(
    <div className={props.containerName}>
      <h1 className="brand-name">
          Ship-it
      </h1>
      <div className="nav-links">
        <NavLink to='/dashboard' exact activeClassName="active-nav-field">
          <p className="nav-title" href="#">Dashboard</p>
        </NavLink> 
        <NavLink to='/transaction' exact activeClassName="active-nav-field">
          <p className="nav-title" href="#">Transaction</p>
        </NavLink>
        <NavLink to='/logout' exact activeClassName="active-nav-field">
          <p className="nav-title" href="#">Logout</p>
        </NavLink>
      </div>
    </div>
  )
}


export default SideNav;
