import React from 'react';
import NumberFormat from 'react-number-format';
import './user-balance.scss';


/**
 * @description - component to load the homepage
 * @function HomePage
 * @param {object} - props. the props passed into the component
 */
const UserBalance = props => {

  return(
    <div className="balance-title"> 
        <p className="user-balance-head">Balance</p>
        <p className="user-balance">
        <NumberFormat value={props.balance} displayType={'text'} thousandSeparator={true} prefix={' ₦'} />
        </p>
    </div>
  )
}


export default UserBalance;
