import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CartProductContext } from "../../App";

const Products = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductContext);
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addToCart = (id, image, title, price) => {
    setCartProducts((prev) => {
      const exists = prev.some((e) => e.id == id);
      return exists
        ? prev
        : [...prev, { id, image, title, price, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCartProducts((prev) => {
      return prev.filter((e) => e.id != id);
    });
  };
  return (
    <div className="bg-white flex flex-wrap gap-2 py-5 justify-evenly">
      {state.map(({ id, title, price, image, rating }) => {
        return (
          <div
            data-aos="zoom-in"
            key={id}
            className="w-[17%] font-semibold text-center rounded-2xl bg-white flex flex-col justify-between p-2 shadow-neutral-400 shadow-md"
          >
            <NavLink to={`/product/${id}`}>
              <img className="h-60 w-60" src={image || null} alt="" />
              <p className="text-xl truncate text-neutral-900">{title}</p>
              <div className="flex justify-between py-2">
                <p className="text-neutral-800">Price: ${price}</p>
                <div>
                  <Stars rating={rating.rate} />
                </div>
              </div>
            </NavLink>
            {cartProducts.some((e) => e.id == id) ? (
              <button
                className="h-10 w-full py-1 text-blue-950 px-3 rounded-2xl border-2 border-blue-950 hover:bg-blue-950 hover:border-white cursor-pointer hover:text-white duration-300"
                onClick={() => removeFromCart(id)}
              >
                remove
              </button>
            ) : (
              <button
                className="h-10 w-full py-1 text-blue-950 px-3 rounded-2xl border-2 border-blue-950 hover:bg-blue-950 hover:border-white cursor-pointer hover:text-white duration-300"
                onClick={() => addToCart(id, image, title, price)}
              >
                add to cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;

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
