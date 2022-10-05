import React from 'react'
import { useDispatch } from 'react-redux'
import './order-item.scss'
import { GameCover } from '../GameCover'
import { deleteItemFromCart } from '../../redux/cart/cartSlice'

export const OrderItem = ({ game }) => {
   const dispatch = useDispatch()
   const handleDeleteClick = () => {
      dispatch(deleteItemFromCart(game.id))
   }
   return (
      <div className='order-item'>
         <div className='order-item__cover'>
            <GameCover image={game.image} />
         </div>
         <div className='order-item__title'>
            <span>{game.title}</span>
         </div>
         <div className='order-item__price'>
            <span>{game.price} грн.</span>
            <span onClick={handleDeleteClick} className='order-item__delete'>
               &times;
            </span>
         </div>
      </div>
   )
}
