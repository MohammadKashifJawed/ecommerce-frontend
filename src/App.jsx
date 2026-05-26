import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./components/collections/Men";
import Women from "./components/collections/Women";
import Electronics from "./components/collections/Electronics";
import Jewellery from "./components/collections/Jewellery";
import Navbar from "./components/pages/Navbar";
import Chief from "./components/pages/Chief";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import Address from "./components/crud/Address";
import Login from "./components/pages/Login";
import LoginProvider from "./context/LoginProvider";
import Profile from "./components/pages/Profile";
import "aos/dist/aos.css";
import SelectedAddressContextProvider from "./context/SelectedAddressContextProvider";
import Order from "./components/pages/Order";
import TotalPriceContextProvider from "./context/TotalPriceContextProvider";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ApiContextProvider from "./context/ApiContextProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <ApiContextProvider>
      <CartProvider>
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
                  <Route path="/electronics" element={<Electronics />} />
                  <Route path="/jewellery" element={<Jewellery />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/address" element={<Address />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </LoginProvider>
            </BrowserRouter>
          </TotalPriceContextProvider>
        </SelectedAddressContextProvider>
      </CartProvider>
    </ApiContextProvider>
  );
}

export default App;
