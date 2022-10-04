import React from 'react'
import './cardblock.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartBlock = () => {
   return (
      <div className='cart-block'>
         <AiOutlineShoppingCart size={28} className='cart-block__icon' />
         <span className='cart-block__total-price'>2313 гривен</span>
      </div>
   )
}
