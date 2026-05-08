import { useState } from "react";
import { TotalPriceContext } from "./TotalPriceContext";

const TotalPriceContextProvider = ({children}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const calculateTotalAmount = (cartProducts) => {
    setTotalAmount(cartProducts.reduce((total, item) => total + item.price * item.quantity, 0));
  };
  const finalTotal = Math.round(totalAmount * 100) / 100;
  const discount = Number((finalTotal / 10).toFixed(2));
  const platformFee = 23;
  const totalPayableAmount = Number(
    (finalTotal - discount + platformFee).toFixed(2),
  );
  return (
    <TotalPriceContext.Provider value={{totalAmount, calculateTotalAmount, finalTotal, 
        discount, platformFee, totalPayableAmount}}>
        {children}
    </TotalPriceContext.Provider>
  );
};

export default TotalPriceContextProvider;
