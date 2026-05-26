import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartProductContext } from "../../App";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ApiContext } from "@/context/ApiContext";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { cartProducts, setCartProducts } = useContext(CartProductContext);
  const { api } = useContext(ApiContext);
  const [cartId, setCartId] = useState(0)
  const [state, setState] = useState({
    id: "",
    name: "",
    imageUrl: "",
    price: "",
    rating: "",
    totalRatings: "",
    description: "",
    reviews: [],
  });

  useEffect(() => {
    api
      .get(`/api/v1/product/${id}`)
      .then(({ data }) => {
        let sum = data.data.reviews.reduce((sum, ele) => sum + ele.rating, 0);
        if (data.data.reviews.length > 0) {
          setState({
            ...data.data,
            rating: sum / data.data.reviews.length,
            totalRatings: data.data.reviews.length,
          });
        } else {
          setState({ ...data.data, rating: 0, totalRatings: 0 });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, state.reviews.userId, api]);

  const isPresent = cartProducts.some((e) => e.id === Number(id));

  const handleAddToCart = () => {
    api.post('/api/v1/cart', { userId: 2, productId: state.id, quantity: 1 })
    .then((res) => {
      setCartId(res.data.data.id)
    })
    .catch(err => console.log(err))
  };

  const removeFromCart = (id) => {
    api.delete(`/api/v1/cart/item/${id}&${cartId}`)
    setCartProducts((prev) => {
      return prev.filter((prod) => prod.id !== id);
    });
  };

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <div className="min-h-screen w-full">
      <div className="h-[91vh] w-full flex justify-around items-center m-5 min-w-0 bg-white">
        <img src={state.imageUrl || null} alt="err" height={400} width={400} />
        <div className="flex flex-col gap-10 w-1/2">
          <h2 className="text-3xl font-bold text-blue-950">{state.name}</h2>
          <p className="text-xl text-justify">{state.description}</p>
          <div className="font-semibold text-neutral-800 flex justify-start items-center">
            Rating: <Stars rating={state.rating} />{" "}
            <span className="px-2 text-sm text-neutral-600">
              {state.totalRatings} ratings
            </span>
          </div>
          <b className="text-2xl font-bold">${state.price}</b>
          {isPresent ? (
            <button
              className="border-2 font-semibold border-blue-950 text-blue-950 p-3 rounded-xl
            hover:bg-blue-950 hover:text-white hover:border-white cursor-pointer duration-300"
              onClick={() => removeFromCart(state.id)}
            >
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
      <div className="h-[30vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Reviews</h1>
        <div
          className="h-7/10 w-7/10 border shadow-xl flex justify-center items-center gap-4
          overflow-x-scroll"
        >
          {state.reviews.length == 0 ? (
            <p className="font-bold text-red-500">No reviews...</p>
          ) : (
            state.reviews.map((review) => {
              return (
                <div
                  key={review.id}
                  className="h-9/10 w-60 border border-neutral-500 rounded-2xl p-1"
                >
                  <div className="h-10 w-full flex justify-start items-center gap-2">
                    <img
                      src={review.user.profileImage}
                      alt=""
                      className="h-8 w-8 rounded-[50%]"
                    />
                    <p className="text-neutral-600 font-semibold text-sm">
                      {review.user.firstName} {review.user.lastName}
                    </p>
                  </div>
                  <Stars rating={review.rating} />
                  <p className="text-clip">{review.comment}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
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

const ProductSkeleton = () => {
  return (
    <div className="h-[90vh] w-full flex justify-around items-center m-5 min-w-0 bg-white">
      <div className="h-100 w-100 bg-neutral-300"></div>
      <div className="flex flex-col gap-10 w-1/2">
        <div className="h-8 w-40 bg-neutral-300"></div>
        <div className="h-40 w-full bg-neutral-300"></div>
        <div className="h-4 w-30 bg-neutral-300"></div>
        <div className="h-4 w-30 bg-neutral-300"></div>
        <div className="h-8 w-full bg-neutral-300"></div>
      </div>
    </div>
  );
};
