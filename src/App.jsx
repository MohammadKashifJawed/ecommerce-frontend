import { BrowserRouter, Route, Routes } from "react-router-dom"
import Men from './components/collections/Men'
import Women from './components/collections/Women'
import Kid from './components/collections/Kids'
import Jewellery from './components/collections/Jewellery'
import Navbar from "./components/pages/Navbar"
import Chief from "./components/pages/Chief"
import Product from "./components/pages/Product"
import Cart from "./components/pages/Cart"
import { createContext, useState } from "react"
import Address from "./components/crud/Address"

export const CartProductContext = createContext()

function App() {
  const [cartProducts, setCartProducts] = useState([])
  return (
    <CartProductContext.Provider value={{cartProducts, setCartProducts}}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Chief />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </BrowserRouter>
    </CartProductContext.Provider>
  )
}

export default App
