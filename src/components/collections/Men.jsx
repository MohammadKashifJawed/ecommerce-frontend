import { CartProductContext } from "@/App"
import axios from "axios"
import { useContext, useEffect, useState } from "react"

const Men = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductContext)
  const [mensProducts, setMensProducts] = useState([])
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then(({data}) => {
      setMensProducts(data)
    }).catch(err => console.log(err))
  })
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
      {mensProducts.map(({ id, title, price, images }) => {
        return (
          <div
            data-aos="zoom-in"
            key={id}
            className="w-[17%] font-semibold text-center rounded-2xl bg-white flex flex-col justify-between p-2 shadow-neutral-400 shadow-md"
          >
              <img className="h-60 w-60" src={images[0] || null} alt="" />
              <p className="text-xl truncate text-neutral-900">{title}</p>
              <div className="flex justify-between py-2">
                <p className="text-neutral-800">Price: ${price}</p>
              </div>
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
                onClick={() => addToCart(id, images[0], title, price)}
              >
                add to cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Men
