import React, { useEffect, useState } from 'react';
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
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { toast } from 'react-toastify';

/**
 * @description - component to load the user dashboard
 * @function UserBoard
 * @param {object} - props. the props passed into the component
 */
export const UserBoard = props => {

  useEffect(() => {

  if((window.location.search.indexOf('pay=fail') > -1)){
    toast.error("Transaction was not successful");
    setTimeout(() => { 
      history.pushState('null', '', '/dashboard');
     }, 6000);
  }
  if((window.location.search.indexOf('pay=success') > -1)){
    toast.success("Payment successful");
    setTimeout(() => {
      history.pushState('null', '', '/dashboard');
     }, 6000);
  }
    props.userOrdersCount();
  }, [])
  const [clicked, setClicked] = useState(false);
  const [modal, setModal] = useState(false);
  const [amountInput, setAmountInput] = useState();

  const OnBarClick = () => setClicked(true);
  const onContainerClick = () => setClicked(false);
  const onPayClick = () => setModal(true)
  
  const handleClose = () => setModal(false);
  const onInputAmountChange = (e) => {
    setAmountInput(e.target.value);
  }

  const onMakePaymentClick = () => {
    let reg = /^\d+$/;
    if(!reg.test(amountInput)){
      toast.error("Please enter a valid amount");
      return;
    }
    if((Number(amountInput)) < 100 || (Number(amountInput) > 10000)){
      toast.error("Amount must be between 100 and 10000")
      return;
    }
    const { email, id } = props.user;
    window.location.href = `${process.env.SERVER_API}/pay?eid=${id}&email=${email}&amount=${amountInput}`;
  }
  return(
    <div className="container-ship-it">
      {
          clicked ? (<SideNav containerName="small-dash-left-container" />) : <SideNav containerName="dash-left-container" />
      }
      <div onClick={clicked ? onContainerClick: null } className={"dash-right-container " + (clicked ? 'container-blur' : null)}>
          <NavBar clicked={clicked} page="Dashboard" openSideBar={OnBarClick} firstName={props.user.firstName} />
          <div className="transaction-box-area
          ">
            <OrdersCount name="Orders Count" amount={props.response} transactionType="Orders"></OrdersCount>
            <OrdersCount name="Transactions Count" amount="coming soon" transactionType="Orders"></OrdersCount>
            <div className="plus-container">
              <FontAwesomeIcon onClick={onPayClick} className='plus-circle' size='3x' icon={faPlusCircle} />
              <p>Fund your Account</p>
            </div>
          </div>
          {
            modal? (
              <Modal show={modal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
              centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <InputGroup className="mb-3">
            <label htmlFor="basic-url">Amount</label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                    ₦
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl onChange={onInputAmountChange} id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>`
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={onMakePaymentClick}>
                Make Payment
              </Button>
            </Modal.Footer>
          </Modal>
            ): (null)
          }
          <button onClick={onPayClick} className='subscribe-btn'>Top up</button>

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
