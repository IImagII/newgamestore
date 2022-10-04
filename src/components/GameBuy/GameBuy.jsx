import React from 'react'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../redux/cart/cartSlice'
import { Button } from '../Button'
import './game-buy.scss'

export const GameBuy = ({ game }) => {
   const dispatch = useDispatch()
   const handleClick = e => {
      e.stopPropagation()
      dispatch(setItemInCart(game))
   }
   return (
      <div className='game-buy'>
         <span className='game-buy__price'>{game.price} грн.</span>
         <Button onClick={handleClick} type='primary'>
            В корзину
         </Button>
      </div>
   )
}
