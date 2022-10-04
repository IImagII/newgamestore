import React from 'react'
import './cardblock.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { CartMenu } from '../CartMenu'
import { calcTotalPrice } from '../utils'

export const CartBlock = () => {
   const items = useSelector(state => state.cart.itemsInCart)
   const totalPrice = calcTotalPrice(items)
   return (
      <div className='cart-block'>
         <AiOutlineShoppingCart size={28} className='cart-block__icon' />
         <span className='cart-block__total-price'>{totalPrice} гривен</span>
         <CartMenu items={items} onClick={() => null} />
      </div>
   )
}
