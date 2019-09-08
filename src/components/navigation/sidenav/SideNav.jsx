import React from 'react';
import './side-nav.scss';


/**
 * @description - component to load the sidenav
 * @function SideNav
 */
export const SideNav = () => {

  return(
    <div className="dash-left-container">
        <h1 className="brand-name">
            Ship-it
        </h1>
        <div className="active-nav-field">
            <a className="nav-title" href="#">Dashboard</a>
        </div>
        <a className="nav-title" href="#">Transaction</a>
    </div>
  )
}


export default SideNav;
