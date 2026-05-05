import axios from "axios";
import { useEffect, useState } from "react";

const UpdateAddress = ({ addressId, setShowUpdateAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    area: "",
    landmark: "",
    pincode: "",
  });
  const { name, mobile, area, landmark, pincode } = address;
  const style = {
    borderBottom: '1px solid red',
    color: 'red'
  }
  const [emptyInput, setEmptyInput] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/address/${addressId}`)
      .then(({ data }) => {
        setAddress(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addressId]);
  const updateAddress = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      mobile === "" ||
      area === "" ||
      landmark === "" ||
      pincode === ""
    ) {
      setEmptyInput(!emptyInput)
    } else {
      axios
        .put(`http://localhost:3000/address/${addressId}`, address)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      setShowUpdateAddress((prev) => !prev);
    }
  };
  const handleChange = ({ target: { name, value } }) => {
    setAddress({ ...address, [name]: value });
  };
  return (
    <div
      className="h-screen w-full flex justify-center items-center z-50 fixed top-0
      nset-0 bg-black/40"
    >
      <form
        className="h-[50vh] w-[33vw] flex flex-col justify-between items-center
        rounded-md shadow-lg bg-white"
        onSubmit={(e) => updateAddress(e)}
      >
        <h1 className="text-xl text-neutral-700 font-bold">Update ADDRESS</h1>
        {emptyInput && <p className="text-red-600">can't set field empty</p>}
        <div
          className="h-20 w-full flex justify-evenly items-center font-semibold
          text-neutral-700"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            value={address.name}
            style={address.name == '' ? style : {}}
            onChange={(e) => handleChange(e)}
            className="h-3/4 w-45/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Mobile*"
            value={address.mobile}
            style={address.mobile == '' ? style : {}}
            onChange={(e) => handleChange(e)}
            className="h-3/4 w-45/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
        </div>
        <div
          className="h-20 w-full font-semibold text-neutral-700 flex justify-center
          items-center"
        >
          <input
            type="text"
            name="area"
            id="area"
            placeholder="Area*"
            value={address.area}
            style={address.area == '' ? style : {}}
            onChange={(e) => handleChange(e)}
            className="h-3/4 w-93/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
        </div>
        <div
          className="h-20 w-full flex justify-evenly items-center font-semibold
          text-neutral-700"
        >
          <input
            type="text"
            name="landmark"
            id="landmark"
            placeholder="Landmark*"
            value={address.landmark}
            style={address.landmark == '' ? style : {}}
            onChange={(e) => handleChange(e)}
            className="h-3/4 w-45/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Pincode*"
            value={address.pincode}
            onChange={(e) => handleChange(e)}
            style={address.pincode == '' ? style : {}}
            className="h-3/4 w-45/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
        </div>
        <div
          className="h-12 w-full flex justify-center items-center border-t border-neutral-500
          text-md text-neutral-600 font-semibold"
        >
          <button className="h-full w-1/2 border-r border-neutral-500 cursor-pointer">
            SAVE
          </button>
          <button
            className="h-full w-1/2 cursor-pointer"
            type="button"
            onClick={() => setShowUpdateAddress(prev => !prev)}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddress;
