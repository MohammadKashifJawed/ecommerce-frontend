import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { CartProductContext } from "../../App";
import { LoginContext } from "../../context/LoginContext";
import { SearchIcon } from "lucide-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenuOutline,
} from "react-icons/io5";

import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const Navbar = () => {
  const { cartProducts } = useContext(CartProductContext);
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);
  const [showMenu, setShowMenu] = useState(false);
  if (
    location.pathname.startsWith("/login")
  ) {
    return null;
  } else {
    return (
      <header className="h-[9vh] w-full flex justify-between items-center px-5 text-sm font-semibold bg-white  text-neutral-800 sticky top-0 z-1 overflow-hidden">
        {/* Only visible if screen width > md and < lg */}
        {!showMenu ? (
          <IoMenuOutline
            className="lg:hidden h-12 w-10"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <RxCross2
            className="lg:hidden h-12 w-10"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && (
          <div
            className={`fixed top-[9vh] left-0 h-[91vh] w-1/3 bg-white shadow-lg 
              transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <NavLink className="w-full" to={"/men"}>
              <div className="h-10 w-full flex justify-between items-center px-4">
                <p
                  className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  Men
                </p>
                <IoIosArrowRoundForward />
              </div>
            </NavLink>
            <NavLink className="w-full" to="/women">
              <div className="h-10 w-full flex justify-between items-center px-4">
                <p
                  className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  Women
                </p>
                <IoIosArrowRoundForward />
              </div>
            </NavLink>
            <NavLink className="w-full" to="/electronics">
              <div className="h-10 w-full flex justify-between items-center px-4">
                <p
                  className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  Electronics
                </p>
                <IoIosArrowRoundForward />
              </div>
            </NavLink>
            <NavLink className="w-full" to="/jewellery">
              <div className="h-10 w-full flex justify-between items-center px-4">
                <p
                  className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  Jewellery
                </p>
                <IoIosArrowRoundForward />
              </div>
            </NavLink>
          </div>
        )}

        <NavLink to="/">
          <img className="h-40" src={logo} alt="logo" />
        </NavLink>
        <div className="hidden lg:flex lg:gap-5">
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
            to={"/electronics"}
          >
            Electronics
          </NavLink>
          <NavLink
            className={`hover:text-blue-950 hover:duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full`}
            to={"/jewellery"}
          >
            Jewellery
          </NavLink>
        </div>
        <InputGroupInlineStart />
        <div className="flex gap-4">
          <NavLink to="/wishlist">
            <div className="h-full flex flex-col justify-center items-center">
              <p>
                <IoHeartOutline className="h-5 w-5" />
              </p>
              <p className="text-xs font-bold">Wishlist</p>
            </div>
          </NavLink>
          <NavLink to={"/cart"}>
            <div className="flex flex-col justify-center items-center relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex justify-center items-center">
                {cartProducts.length}
              </span>
              <IoCartOutline className="h-5 w-5" />
              <p className=" text-xs font-bold">Cart</p>
            </div>
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
            <NavLink to={"/profile"}>
              <div className="h-full flex flex-col justify-center items-center">
                <IoPersonOutline className="h-5 w-6" />
                <p className="text-xs font-bold">Profile</p>
              </div>
            </NavLink>
          )}
        </div>
      </header>
    );
  }
};

export default Navbar;

function InputGroupInlineStart() {
  return (
    <Field className="lg:max-w-sm w-1/4 bg-neutral-200 rounded-2xl text-neutral-700">
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
