import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        console.log(props)
        props.userBalance()
    }, [])

    return (
        <div className="right-header">
            <div className="header-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="header-title" >
                <h3>Ship it Dashboard</h3>
                <p>welcome back sulivan</p>
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

// export const mapDispatchToProps = (dispatch) => ({
//   action:{
//     userBalance: bindActionCreators( userBalance, dispatch)
//   }
// })
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


