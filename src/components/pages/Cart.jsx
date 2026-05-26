import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartProductContext } from "../../App";
import { IoTrashBinOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { LoginContext } from "../../context/LoginContext";
import { SelectedAddressContext } from "@/context/SelectedAddressContext";
import { TotalPriceContext } from "@/context/TotalPriceContext";
import { Button } from "../ui/button"

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductContext);
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const { selectedAddress } = useContext(SelectedAddressContext)
  const {finalTotal, discount, platformFee, totalPayableAmount, calculateTotalAmount} =   useContext(TotalPriceContext)

  useEffect(() => {
    calculateTotalAmount(cartProducts)
  }, [cartProducts, calculateTotalAmount])

  const handleRemoveFromCart = (id) => {
    setCartProducts(cartProducts.filter((e) => e.id !== id));
  };

  const updateCart = (type, id) => {
    setCartProducts((prev) => {
      if (type === "dec") {
        return prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0);
      }
      if (type === "inc") {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return prev;
    });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);


  if (cartProducts.length == 0) {
    return (
      <>
        <div
          className="h-[90vh] flex flex-col justify-center items-center text-4xl
                font-semibold"
        >
          <IoTrashBinOutline className="text-red-500" />
          <h1>Cart is empty</h1>
          <NavLink to="/">
            <Button size="lg" className="hover:bg-neutral-800" >Browse all products</Button>
          </NavLink>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="min-h-[90vh] w-full flex">
        <div className="min-h-full w-2/3 flex flex-col items-center gap-5 shadow-lg">
          {cartProducts.map(({ id, imageUrl, title, price, quantity }) => {
            return (
              <div
                key={id}
                className="h-40 w-[90%] flex justify-evenly items-center rounded-2xl 
                shadow-md mt-3"
              >
                <img src={imageUrl} alt="img" className="h-30 w-1/10" />
                <h2 className="text-md font-semibold text-neutral-800 w-4/10">
                  {title}
                </h2>
                <b className="text-neutral-800 w-2/10">
                  ${(Number(price) * quantity).toFixed(2)}
                </b>
                <div className="h-8 w-8/100 border-2 rounded-2xl flex justify-evenly items-center border-neutral-800 text-md cursor-pointer">
                  <p
                    onClick={() => updateCart("dec", id)}
                    className="h-full w-1/3 flex justify-center items-center"
                  >
                    -
                  </p>
                  <p className="h-full w-1/3 flex justify-center items-center">
                    {quantity}
                  </p>
                  <p
                    onClick={() => updateCart("inc", id)}
                    className="h-full w-1/3 flex justify-center items-center"
                  >
                    +
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(id)}
                  className="border-2 border-blue-950 px-4 py-2 rounded-3xl text-blue-950 font-semibold hover:bg-blue-950 hover:text-white hover:border-white cursor-pointer duration-300
                w-1/10"
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>

        <div className="h-[90vh] w-1/3 text-neutral-800 font-semibold">
          <div className="h-1/10 w-full bg-neutral-200 flex justify-between items-center text-sm px-2
            font-normal">
            <div>
              <p>Deliver to: <span className="text-black font-bold">{selectedAddress.name}, {selectedAddress.mobile}</span></p>
              <p>{selectedAddress.area}, {selectedAddress.landmark}, {selectedAddress.pincode}</p>
            </div>
            <NavLink to='/address'>
              <button className="py-1 px-3 border-2 border-blue-900 text-blue-950">Change address</button>
            </NavLink>
          </div>
          <p className="flex justify-between items-center p-2">
            <span>Total MRP</span> <span>${finalTotal}</span>
          </p>
          <p className="flex justify-between items-center p-2">
            <span>Discount</span> <span>${discount}</span>
          </p>
          <p className="flex justify-between items-center p-2">
            <span>Platform fee</span> <span>${platformFee}</span>
          </p>{" "}
          <hr />
          <p className="flex justify-between items-center p-2">
            <span className="font-bold">Total amount</span>{" "}
            <span>${totalPayableAmount}</span>
          </p>
          <NavLink to="/order">
            <Button size="lg" className="float-end hover:bg-neutral-950" >Checkout</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Cart;
