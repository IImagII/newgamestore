import React from 'react'
import { Button } from '../Button'
import './game-buy.scss'

export const GameBuy = ({ game }) => {
   return (
      <div className='game-buy'>
         <span className='game-buy__price'>{game.price} грн.</span>
         <Button onClick={() => null} type='primary'>
            В корзину
         </Button>
      </div>
   )
}
