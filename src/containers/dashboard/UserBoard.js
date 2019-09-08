import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './user-board.scss';
import OrdersCount from '../../components/cards/count/OrdersCount';
import NavBar from '../../components/navigation/navbar/NavBar';
import * as actions from '../../actions/dashboard/userOrders';
import SideNav from '../../components/navigation/sidenav/SideNav'

/**
 * @description - component to load the user dashboard
 * @function UserBoard
 * @param {object} - props. the props passed into the component
 */
export const UserBoard = props => {

  useEffect(() => {
    props.userOrdersCount();
  }, [])

  return(
    <div className="container">
        <SideNav/>
        <div className="dash-right-container">
            <NavBar />
            <div className="transaction-box-area
            ">
              <OrdersCount name="Orders Count" amount={props.response} transactionType="Orders"></OrdersCount>
              <OrdersCount name="Transactions Count" amount="coming soon" transactionType="Orders"></OrdersCount>
              <div className="plus-container">
                <FontAwesomeIcon className='plus-circle' size='3x' icon={faPlusCircle} />
                <p>Fund your Account</p>
              </div>
            </div>
            <button className='subscribe-btn'>Top up</button>
        </div>
    </div>
  )
}


UserBoard.propTypes = {
  userOrdersCount: PropTypes.func,
};

export const mapStateToProps = state => (
  {
    ...state.userOrdersCount,
  }
)

export const mapDispatchToProps = dispatch => bindActionCreators(actions,
  dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
