import React from 'react';
import './side-nav.scss';
import { NavLink } from 'react-router-dom';


/**
 * @description - component to load the sidenav
 * @function SideNav
 */
export const SideNav = props => {

  const logoutUser = (e) =>{
    e.preventDefault();
    localStorage.clear();
    window.location.replace('/');
  }
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
          <p className="nav-title" href="#">Orders</p>
        </NavLink>
        <NavLink to='/logout' onClick={logoutUser} exact activeClassName="active-nav-field">
          <p className="nav-title" href="#">Logout</p>
        </NavLink>
      </div>
    </div>
  )
}


export default SideNav;
