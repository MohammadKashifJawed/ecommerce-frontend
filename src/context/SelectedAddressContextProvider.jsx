import { useEffect, useState } from "react";
import { SelectedAddressContext } from "./SelectedAddressContext";
import axios from "axios";

const SelectedAddressContextProvider = ({ children }) => {
  const [allAddresses, setAllAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({
    id: '',
    name: '',
    mobile: '',
    area: '',
    landmark: '',
    pincode: '',
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/address")
      .then(({ data }) => {
        setAllAddresses(data);
        setSelectedAddress(data[0])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SelectedAddressContext.Provider
      value={{ selectedAddress, setSelectedAddress }}
    >
      {children}
    </SelectedAddressContext.Provider>
  );
};

export default SelectedAddressContextProvider;
