import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { CartProductContext } from "../../App";

// bg-[#F2EAE0]

const Navbar = () => {
  const { cartProducts } = useContext(CartProductContext);
  const location = useLocation();
  if (
    location.pathname.startsWith("/product/") ||
    location.pathname.startsWith("/cart")
  ) {
    return null;
  } else {
    return (
      <header className="h-[10vh] w-full flex justify-between items-center px-5 text-sm font-semibold bg-white  text-neutral-800 sticky top-0 z-1 overflow-hidden">
        <NavLink to="/">
          <img className="h-50" src={logo} alt="logo" />
        </NavLink>
        <div className="flex gap-5">
          <NavLink
            className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
            to={"/men"}
          >
            Men
          </NavLink>
          <NavLink
            className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
            to={"/women"}
          >
            Women
          </NavLink>
          <NavLink
            className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
            to={"/kids"}
          >
            Kids
          </NavLink>
          <NavLink
            className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
            to={"/jewellery"}
          >
            Jewellery
          </NavLink>
        </div>
        <NavLink to={"/cart"}>
          <p className=" text-xl font-semibold">
            Cart <sup>{cartProducts.length}</sup>
          </p>
        </NavLink>
      </header>
    );
  }
};

export default Navbar;
