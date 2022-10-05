import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/cartSlice'
import './cart-item.scss'

export const CartItem = ({ price, title, id }) => {
   const dispatch = useDispatch()
   const handleDeleteCart = () => {
      dispatch(deleteItemFromCart(id))
   }
   return (
      <div className='cart-item'>
         <span>{title}</span>
         <div className='cart-item__price'>
            <span>{price} грн.</span>
            <span className='cart-item__delete' onClick={handleDeleteCart}>
               &times;
            </span>
         </div>
      </div>
   )
}
