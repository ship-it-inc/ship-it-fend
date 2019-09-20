import React from 'react';
import './side-nav.scss';


/**
 * @description - component to load the smallsidenav
 * @function SideNav
 */
export const SmallSideNav = () => {

  return(
    <div className="dash-left-container">
        <h1 className="brand-name">
            Ship-it
        </h1>
        <div className="small-active-nav-field">
            <a className="small-nav-title" href="#">Dashboard</a>
        </div>
        <a className="small-nav-title" href="#">Transaction</a>
    </div>
  )
}


export default SideNav;
