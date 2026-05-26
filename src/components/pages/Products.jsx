import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CartProductContext } from "../../App";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ApiContext } from "@/context/ApiContext";

const Products = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductContext);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true)
  const { api } = useContext(ApiContext)
  useEffect(() => {
    api
      .get("/api/v1/product")
      .then((res) => {
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false)
      })
  }, []);
  const addToCart = (id, imageUrl, name, price) => {
    api.post('/api/v1/cart', { userId: 2, productId: id, quantity: 1 })
    // setCartProducts((prev) => {
    //   const exists = prev.some((e) => e.id == id);
    //   return exists
    //     ? prev
    //     : [...prev, { id, imageUrl, name, price, quantity: 1 }];
    // });
  };
  const removeFromCart = (id) => {
    // api.delete(`/api/v1/cart/${id}`)
    setCartProducts((prev) => {
      return prev.filter((e) => e.id != id);
    });
  };

  if (loading) {
    return (
      <Skeleton1 />
    );
  }

  return (
    <div className="bg-white flex flex-wrap gap-2 py-5 justify-evenly">
      {state.map(({ id, name, price, imageUrl }) => {
        return (
          <div
            data-aos="zoom-in"
            key={id}
            className="w-70 font-semibold text-center rounded-2xl bg-white flex flex-col justify-between p-2 shadow-neutral-400 shadow-md"
          >
            <NavLink to={`/product/${id}`}>
              <img className="h-60 w-60" src={imageUrl || null} alt="" />
              <p className="text-xl truncate text-neutral-900">{name}</p>
              <div className="flex justify-between py-2">
                <p className="text-neutral-800">Price: ${price}</p>
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
                onClick={() => addToCart(id, imageUrl, name, price)}
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

// const Stars = ({ rating }) => {
//   return (
//     <div className="flex">
//       {[1, 2, 3, 4, 5].map((star) => {
//         if (rating >= star) return <FaStar key={star} color="gold" />;
//         if (rating >= star - 0.5)
//           return <FaStarHalfAlt key={star} color="gold" />;
//         return <FaRegStar key={star} color="gray" />;
//       })}
//     </div>
//   );
// };


export function SkeletonCard() {
  return (
    <Card className="h-250 w-[17%]">
      <CardHeader>
        <Skeleton className="h-60 w-60" />
        <Skeleton className="h-20 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}

const Skeleton1 = () => {
  return(
    <div className="h-[150vh] w-full">
      <div className="h-screen w-full bg-neutral-300"></div>
      <div className="flex flex-wrap gap-2 py-5 justify-evenly">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}
