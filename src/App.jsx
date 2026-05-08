import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./components/collections/Men";
import Women from "./components/collections/Women";
import Kid from "./components/collections/Kids";
import Jewellery from "./components/collections/Jewellery";
import Navbar from "./components/pages/Navbar";
import Chief from "./components/pages/Chief";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import { createContext, useState, useEffect } from "react";
import Address from "./components/crud/Address";
import Login from "./components/pages/Login";
import LoginProvider from "./context/LoginProvider";
import Profile from "./components/pages/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import SelectedAddressContextProvider from "./context/SelectedAddressContextProvider";
import Order from "./components/pages/Order";
import TotalPriceContextProvider from "./context/TotalPriceContextProvider";

export const CartProductContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);
  return (
    <CartProductContext.Provider value={{ cartProducts, setCartProducts }}>
      <SelectedAddressContextProvider>
        <TotalPriceContextProvider>
          <BrowserRouter>
            <LoginProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Chief />} />
                <Route path="/login" element={<Login />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/kid" element={<Kid />} />
                <Route path="/jewellery" element={<Jewellery />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<Address />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/order" element={<Order />} />
              </Routes>
            </LoginProvider>
          </BrowserRouter>
        </TotalPriceContextProvider>
      </SelectedAddressContextProvider>
    </CartProductContext.Provider>
  );
}

export default App;
