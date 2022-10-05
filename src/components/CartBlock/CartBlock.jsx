import React, { useCallback, useState } from 'react'
import './cardblock.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { CartMenu } from '../CartMenu'
import { calcTotalPrice } from '../utils'
import { ItemsInCart } from '../ItemsInCart'
import { useNavigate } from 'react-router-dom'

export const CartBlock = () => {
   const items = useSelector(state => state.cart.itemsInCart)
   const totalPrice = calcTotalPrice(items)
   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
   const navigate = useNavigate()

   const handleClick = useCallback(() => {
      setIsCartMenuVisible(false)
      navigate('/order/')
   }, [navigate])

   return (
      <div className='cart-block'>
         <ItemsInCart quantity={items.length} />
         <AiOutlineShoppingCart size={28} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
         {totalPrice > 0 && <span className='cart-block__total-price'>{totalPrice} гривен</span>}
         {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
      </div>
   )
}
