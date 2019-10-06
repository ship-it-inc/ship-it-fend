import React from 'react';
import './orders-count.scss';
import arrowRight from '../../../assets/images/arrow.svg'

/**
 * @description - component to load the homepage
 * @function HomePage
 * @param {object} - props. the props passed into the component
 */
const OrdersCount = props => {

  return(
        <div className="transaction-box">
            <h3>{props.name}</h3>
            <h3 className="user-count-h3">{props.amount}</h3>
            <div className="count-bottom-line"></div>
            <div className="count-card-lower">
              <p>successful {props.transactionType}</p>
            </div>            
        </div>
  )
}


export default OrdersCount;
