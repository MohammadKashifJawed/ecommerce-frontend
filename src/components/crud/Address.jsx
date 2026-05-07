import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AddNewAddress from "./AddNewAddress";
import UpdateAddress from "./UpdateAddress";
import { LoginContext } from "../../context/LoginContext";

const Address = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(LoginContext)
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showUpdateAddress, setShowUpdateAddress] = useState(false);
  const [addressId, setAddressId] = useState(0);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/address")
      .then(({ data }) => {
        setAddresses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addresses]);
  const handleUpdate = (id) => {
    setShowUpdateAddress(!showUpdateAddress);
    setAddressId(id);
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/address/${id}`)
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    if (!isLoggedIn){
      navigate('/login')
    }
  }, [navigate, isLoggedIn])
  return (
    <div className="min-h-[90vh] w-full flex justify-center items-center">
      {showAddAddress && (
        <AddNewAddress setShowAddAddress={setShowAddAddress} />
      )}
      {showUpdateAddress && (
        <UpdateAddress addressId={addressId} setShowUpdateAddress={setShowUpdateAddress} />
      )}
      <div className="h-8/10 w-3/7 flex flex-col justify-start items-center gap-4 shadow-lg pb-2">
        <div className="w-full flex justify-between items-center p-2">
          <p className="text-xl font-bold text-neutral-800">Saved Address</p>
          <NavLink>
            <button
              className="shadow-sm shadow-neutral-400 px-4 py-1 text-blue-950 text-md font-semibold cursor-pointer"
              onClick={() => setShowAddAddress((prev) => !prev)}
            >
              + add new address
            </button>
          </NavLink>
        </div>
        {addresses.map(({ id, name, mobile, area, landmark, pincode }) => {
          return (
            <div
              key={id}
              className="h-35 w-9/10 shadow-md shadow-neutral-400 text-neutral-700 font-semibold flex flex-col justify-between text-sm rounded-xl"
            >
              <h2 className="pl-2 text-lg font-bold text-neutral-800">
                {name}
              </h2>
              <h2 className="pl-2">{mobile}</h2>
              <h2 className="pl-2">
                {area}, {landmark}, {pincode}
              </h2>
              <div className="w-full flex border-t border-t-neutral-300 text-blue-950 font-semibold">
                <button
                  className="w-1/2 p-3 border-r border-r-neutral-300 cursor-pointer"
                  onClick={() => handleUpdate(id)}
                >
                  update
                </button>
                <button className="w-1/2 p-3 cursor-pointer"
                  onClick={() => handleDelete(id)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
