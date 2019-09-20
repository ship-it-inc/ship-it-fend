import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './nav-bar.scss';
import UserBalance from '../../../components/cards/balance/UserBalance';
import SmallSideNav from '../sidenav/SideNav';
import * as actions from '../../../actions/nav/userBalance';


/**
 * @description - component to load the NavBar
 * @function NavBar
 * @param {object} - props. the props passed into the component
 */
export const NavBar = props => {
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        props.userBalance()
    }, [])

    return (
        <div className="right-header">
            <div onClick={props.openSideBar} className="header-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="header-title" >
                <h3>Ship it Dashboard</h3>
                <p>welcome back sulivan</p>
            </div>
            <UserBalance balance={props.balanceResponse}></UserBalance>
            <div>
            {
                clicked ? (<SideNav/ >) : null
            }
            </div>
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


