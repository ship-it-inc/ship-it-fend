import React from 'react';
import './login.scss';
import Button from '../../components/buttons/Button';
import FoodType from '../../components/cards/food-types/FoodType'
import googleImage from './../../assets/images/google.svg';
import backgroundDots from './../../assets/images/food-dots.svg';
import appetizer from './../../assets/images/appetizer.jpg';
import carbohydrates from './../../assets/images/carbohydrates.jpg';
import protein from './../../assets/images/protein.jpg';


export const LoginPage = ({children}) => 
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
      <Button type="submit" classes="login-button"><img className="google-img" alt="Google" src={ googleImage } />Sign in with Google</Button>
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
