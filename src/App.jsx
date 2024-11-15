import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Products from './Pages/Products'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Order from './Pages/Order'
import PlaceOrder from './Pages/PlaceOrder'
import Error from './Pages/Error'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/products/:productId' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App