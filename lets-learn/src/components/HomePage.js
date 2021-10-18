import React from 'react';
import '../App.css';
import { Button, ButtonLog } from './Button';
import './HomePage.css';


function HomePage() {
    return (
      <div className='hero-container'>
        <h1>Let's Learn</h1>
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
      </div>
      <div className='Login'>
      <ButtonLog
          className='log-btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOG IN
        </ButtonLog>
      </div>
      </div>
    );
  }

export default HomePage;