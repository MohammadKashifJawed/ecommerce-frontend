import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./ApiContext";

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const { api } = useContext(ApiContext)

  useEffect(() => {
    api.
        get(`/api/v1/cart`)
  },[])

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
    });
  }, []);

  return (
    <CartProvider.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartProvider;
