import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CartProductContext } from "../../App";
import logo from '../../assets/logo.png'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const { cartProducts, setCartProducts } = useContext(CartProductContext);
  const [state, setState] = useState({
    id: "",
    title: "",
    image: "",
    price: '',
    rating: '',
    description: "",
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(({data}) => {
        setState(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id]);

  const isPresent = cartProducts.some(e => e.id === Number(id));

  const handleAddToCart = () => {
    setCartProducts(prev => {
      const exists = prev.some(e => e.id === Number(id));
      return exists ? prev : [...prev, {...state, quantity: 1}];
    })
  };

  const removeFromCart = (id) => {
    setCartProducts(prev => {
      return prev.filter(prod => prod.id !== id)
    })
  }

  return (
    <>
      <div className="h-[10vh] px-4 flex justify-between items-center overflow-hidden text-neutral-800 text-2xl bg-white shadow-md">
        <NavLink to={"/"}>
          {/* <h2 className="font-bold text-3xl">Shoplix</h2> */}
          <img className="h-50" src={logo} alt="logo" />
        </NavLink>
        <NavLink to={"/cart"}>
          <p className="font-semibold">
            Cart <sup>{cartProducts.length}</sup>
          </p>
        </NavLink>
      </div>

      <div className="flex justify-around items-center m-5 min-w-0 bg-white">
        <img src={state.image || null} alt="err" height={400} width={400} />
        <div className="flex flex-col gap-10 w-1/2">
          <h2 className="text-3xl font-bold text-blue-950">{state.title}</h2>
          <p className="text-xl text-justify">{state.description}</p>
          <div className="font-semibold text-neutral-800 flex justify-start items-center">
            Rating: <Stars rating={state.rating.rate} />
          </div>
          <b className="text-2xl font-bold">${state.price}</b>
          {isPresent ? (
            <button
              className="border-2 font-semibold border-blue-950 text-blue-950 p-3 rounded-xl
            hover:bg-blue-950 hover:text-white hover:border-white cursor-pointer duration-300"
              onClick={() => removeFromCart(state.id)}>
              Remove from cart
            </button>
          ) : (
            <button
              className="border-2 font-semibold border-blue-950 text-blue-950 p-3 rounded-xl
            hover:bg-blue-950 hover:text-white hover:border-white cursor-pointer duration-300"
              onClick={() => handleAddToCart()}
            >
              add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;


const Stars = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) return <FaStar key={star} color="gold" />;
        if (rating >= star - 0.5)
          return <FaStarHalfAlt key={star} color="gold" />;
        return <FaRegStar key={star} color="gray" />;
      })}
    </div>
  );
};