import axios from "axios";
import { useState } from "react";

const AddNewAddress = ({ setShowAddAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    area: "",
    landmark: "",
    pincode: "",
  });
  const { name, mobile, area, landmark, pincode } = address;
  const saveAddress = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      mobile === "" ||
      area === "" ||
      landmark === "" ||
      pincode === ""
    ) {
      alert("Please fill complete form");
    } else {
      axios
        .post("http://localhost:3000/address", address)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      setShowAddAddress(prev => !prev)
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
        onSubmit={(e) => saveAddress(e)}
      >
        <h1 className="text-xl text-neutral-700 font-bold">ADD NEW ADDRESS</h1>
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
            onChange={(e) => handleChange(e)}
            className="h-3/4 w-45/100 border-b border-neutral-500 outline-none caret-neutral-500"
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Mobile*"
            value={address.mobile}
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
            onClick={() => setShowAddAddress((prev) => !prev)}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;
