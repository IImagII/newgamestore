import React from 'react'
import { useSelector } from 'react-redux'
import { GameBuy } from '../GameBuy'
import { GameCover } from '../GameCover'
import { GameGenre } from '../GameGenre'
import './game-page.scss'

export const GamePage = () => {
   const games = useSelector(state => state.game.currentGame)
   if (!games) return null
   return (
      <div className='game-page'>
         <h1 className='game-page__title'>{games.title}</h1>
         <div className='game-page__content'>
            <div className='game-page__left'>
               <iframe width='90%' height='400px' src={games.video} title='Youtube video Player' frameBorder='null'></iframe>
            </div>
            <div className='game-page__right'>
               <GameCover image={games.image} />
               <p>{games.description}</p>
               <p className='secondary-text'>Популярные метки этого продукта:</p>
               {games.genres.map(genre => (
                  <GameGenre genre={genre} key={genre} />
               ))}
               <div className='game-page__buy-game'>
                  <GameBuy game={games} />
               </div>
            </div>
         </div>
      </div>
   )
}
