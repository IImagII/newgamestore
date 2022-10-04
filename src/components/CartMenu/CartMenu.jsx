import React from 'react'
import { Button } from '../Button'
import { calcTotalPrice } from '../utils'
import './cart-menu.scss'

export const CartMenu = ({ items, onClick }) => {
   return (
      <div className='cart-menu'>
         <div className='cart-menu__game-list'>{items.length > 0 ? items.map(item => item.title) : 'Корзина пуста'}</div>
         {items.length > 0 ? (
            <div className='cart-menu__arrange'>
               <div className='cart-menu__total-price'>
                  <span>Итого:</span>
                  <span>{calcTotalPrice(items)} грн.</span>
               </div>
               <Button type='primary' size='m' onClick={onClick}>
                  Оформить заказ
               </Button>
            </div>
         ) : null}
      </div>
   )
}
