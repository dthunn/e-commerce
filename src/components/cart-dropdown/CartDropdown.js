import React from 'react';

import CustomButtom from '../custom-button/CustomButton';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default CartDropdown;
