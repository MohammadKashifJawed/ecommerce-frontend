import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { CartProductContext } from "../../App";
import { CgProfile } from "react-icons/cg";
import { LoginContext } from "../../context/LoginContext";
import { SearchIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const Navbar = () => {
  const { cartProducts } = useContext(CartProductContext);
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);
  if (
    location.pathname.startsWith("/product/") ||
    location.pathname.startsWith("/cart") ||
    location.pathname.startsWith("/login")
  ) {
    return null;
  } else {
    return (
      <header className="h-[10vh] w-full flex justify-between items-center px-5 text-sm font-semibold bg-white  text-neutral-800 sticky top-0 z-1 overflow-hidden">
        <NavLink to="/">
          <img className="h-50" src={logo} alt="logo" />
        </NavLink>
        <InputGroupInlineStart />
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
        {!isLoggedIn ? (
          <NavLink to={"/login"}>
            <button
              className="px-6 py-3 bg-blue-950 text-white font-semibold rounded-2xl
            cursor-pointer"
            >
              Login
            </button>
          </NavLink>
        ) : (
          <NavLink to={'/profile'}>
            <div className="h-15 w-12 flex flex-col justify-center items-center">
              <CgProfile className="h-8 w-full" />
              <p>Profile</p>
            </div>
          </NavLink>
        )}
      </header>
    );
  }
};

export default Navbar;



function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm bg-neutral-200 rounded-2xl text-neutral-700">
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
