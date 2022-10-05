import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GamePage } from './components/GamePage'
import { Header } from './components/Header'
import { OrderPage } from './components/OrderPage'
import { HomePage } from './pages/HomePage'

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Header />
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/app/:title' element={<GamePage />} />
               <Route path='/order/' element={<OrderPage />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
