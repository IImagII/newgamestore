import React from 'react'
import './items-cart.scss'

export const ItemsInCart = ({ quantity = 0 }) => {
   return quantity > 0 ? <div className='items-cart'>{quantity}</div> : null
}
