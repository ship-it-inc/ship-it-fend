import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify'
import './home.scss';
import Button from '../../components/buttons/Button';
import FoodType from '../../components/cards/food-types/FoodType'
import googleImage from './../../assets/images/google.svg';
import backgroundDots from './../../assets/images/food-dots.svg';
import appetizer from './../../assets/images/appetizer.jpg';
import carbohydrates from './../../assets/images/carbohydrates.jpg';
import protein from './../../assets/images/protein.jpg';

import * as actions from '../../actions/authactions/social-auth';


const handleClick = () => {
  window.location.href = 'https://ship-it-staging.herokuapp.com/api/v1/auth/google';
  // window.location.href = 'http://localhost:3000/api/v1/auth/google';
}

/**
 * @description - component to load the homepage
 * @function HomePage
 * @param {object} - props. the props passed into the component
 */
const HomePage = (props) => {

useEffect(() => {
  if (props['user']) {
    props.history.push('/dashboard')
  }
})

useEffect(() => {
  if(props.error){
    toast.error(props.error.message);
  }

}, [props.error])
  return(
    <div className="main-container">
      <div className="left-container">
        <h1 className="brand-text">Ship-It</h1>
        <div className="line-word">
          <div className="line"><hr/></div><p className="welcome">welcome</p>
        </div>
        <h1 className="brand-statement">Let us take care of food delivery for you while you focus on your work.</h1>
        <p><span className="short-line">-</span>Login to the platform</p>
        <p><span className="short-line">-</span> Place your order</p>
        <p><span className="short-line">-</span> Wait for delivery</p>
        <Button onClick={ () => handleClick() } type="submit" classes="login-button"><img className="google-img" alt="Google" src={ googleImage } />Sign in with Google</Button>
      </div>
      <div className="right-container">
        <div className="background-box">
          <div><img className="top-dots" src={backgroundDots} alt=""/></div>
          <div><img className="bottom-dots" src={backgroundDots} alt=""/></div>
          <FoodType imageUrl={carbohydrates} menuType="Carbohydrates" positionClass="top-menu-position"/>
          <FoodType imageUrl={appetizer} menuType="Healthy Options" positionClass="left-menu-position"/>
          <FoodType imageUrl={protein} menuType="Protein" positionClass="right-menu-position"/>
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export const mapStateToProps = state => (
  {
    ...state.socialAuth,
  }
);

const mapDispatchToProps = dispatch =>  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
