import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Address from "../crud/Address";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "@/context/LoginContext";

const Profile = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(LoginContext)
  const token = localStorage.getItem("access_token");
  const [detailsBtn, setDetailsBtn] = useState(true);
  const [addressBtn, setAddressBtn] = useState(false);
  const [ordersBtn, setOrdersBtn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState({
    id: "",
    avatar: null,
    email: "",
    name: "",
    role: "",
  });
  const { id, avatar, email, name, role } = details;
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setDetails({
          id: data.id,
          avatar: data.avatar,
          email: data.email,
          name: data.name,
          role: data.role,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [details, token]);
  useEffect(() => {
    if (!isLoggedIn){
      navigate('/login')
    }
  }, [navigate, isLoggedIn])

  if (loading) {
    return(
      <ProfileSkeleton />
    )
  }

  return (
    <div className="h-[90vh] w-full flex justify-evenly items-center">
      <div className="h-full w-1/3 border">
        <div
          onClick={() => {
            setAddressBtn(false);
            setDetailsBtn(!detailsBtn);
            setOrdersBtn(false);
          }}
          className="h-15 w-full hover:bg-neutral-100 flex justify-between items-center px-2
                font-bold"
        >
          <p>Details</p>{" "}
          {detailsBtn ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
        <div
          onClick={() => {
            setAddressBtn(!addressBtn);
            setDetailsBtn(false);
            setOrdersBtn(false);
          }}
          className="h-15 w-full hover:bg-neutral-100 flex justify-between items-center px-2
                font-bold"
        >
          <p>Saved Addresses</p>{" "}
          {addressBtn ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
        <div
          onClick={() => {
            setAddressBtn(false);
            setDetailsBtn(false);
            setOrdersBtn(!ordersBtn);
          }}
          className="h-15 w-full hover:bg-neutral-100 flex justify-between items-center px-2
                font-bold"
        >
          <p>Orders</p> {ordersBtn ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
      </div>
      {ordersBtn && <Orders />}
      {addressBtn && <Address />}
      {detailsBtn && (
        <div
          className="h-full w-full flex flex-col justify-evenly items-center shadow-md 
        shadow-zinc-600"
        >
          <img
            src={avatar}
            alt="avatar"
            height={200}
            width={200}
            className="rounded-[50%]"
          />
          <p className="text-xl font-bold text-zinc-900">
            Name:
            <span className="text-zinc-700">{name}</span>
          </p>
          <p className="text-xl font-bold text-zinc-900">
            Email:
            <span className="text-zinc-700">{email}</span>
          </p>
          <p className="text-xl font-bold text-zinc-900">
            Role:
            <span className="text-zinc-700">{role}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));
  });
  if (orders.length == 0) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-xl font-bold">No Orders yet!</p>
        <NavLink to="/">
          <Button
            variant="outline"
            className="bg-blue-950 text-white font-semibold"
          >
            Browse products
          </Button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center overflow-y-auto-scroll">
      {orders.map(({ id, cartProducts, totalPayableAmount }) => {
        return (
          <div key={id} className="h-60 w-9/10 border-2 my-3">
            <div className="h-full w-full flex flex-col justify-evenly items-center">
              <div className="h-8/10 w-full flex overflow-x-scroll">
                {cartProducts.map(({ id, image, title, price, quantity }) => {
                  return (
                    <OrderItems
                      key={id}
                      image={image}
                      title={title}
                      price={price}
                      quantity={quantity}
                    />
                  );
                })}
              </div>
              <div className="w-full flex justify-around items-center font-semibold">
                <p>Order id: {id}</p>
                <p>
                  Total amount paid: ${totalPayableAmount}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrderItems = ({ image, title, price, quantity }) => {
  return (
    <div className="h-full w-full flex justify-center items-center border-2">
      <img src={image} alt="err" className="h-20 w-20" />
      {/* <p>{title}</p>
            <p>{price}</p>
            <p>{quantity}</p> */}
    </div>
  );
};


const ProfileSkeleton = () => {
  return(
    <div className="h-[90vh] w-full flex justify-evenly items-center" >
      <div className="h-full w-1/3 flex flex-col justify-start gap-3">
        <div className="h-12 w-full bg-neutral-300"></div>
        <div className="h-12 w-full bg-neutral-300"></div>
        <div className="h-12 w-full bg-neutral-300"></div>
      </div>
      <div className="h-full w-full flex flex-col justify-evenly items-center">
        <div className="h-50 w-50 rounded-[50%] bg-neutral-300"></div>
        <p className="h-5 w-30 bg-neutral-300"></p>
        <p className="h-5 w-50 bg-neutral-300"></p>
        <p className="h-5 w-35 bg-neutral-300"></p>
      </div>
    </div>
  )
}