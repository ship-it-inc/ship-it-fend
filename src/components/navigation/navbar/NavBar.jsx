import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './nav-bar.scss';
import UserBalance from '../../../components/cards/balance/UserBalance';
import * as actions from '../../../actions/nav/userBalance';


/**
 * @description - component to load the NavBar
 * @function NavBar
 * @param {object} - props. the props passed into the component
 */
export const NavBar = props => {
    useEffect(() => {
        props.userBalance();
    }, [])

    return (
        <div className="right-header">
            <div onClick={props.openSideBar} className={"header-bars " + (props.clicked ? "display-off" : null)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="header-title" >
                <h3>Ship it {props.page}</h3>
                <p>Welcome back {props.firstName}</p>
                <h4 className="small-page-name">{props.page}</h4>
            </div>
            <UserBalance balance={props.balanceResponse}></UserBalance>
        </div>
        
    )
}

export const mapStateToProps = state => (
    {
      ...state.userBalance,
    }
  )
  
  export const mapDispatchToProps = dispatch => bindActionCreators(actions,
    dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


