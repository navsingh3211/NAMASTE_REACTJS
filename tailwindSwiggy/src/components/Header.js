import { HEADER_LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [LoginStatus, setLoginStatus] = useState("Login");
  const onelineStatus = useOnlineStatus();

  const dataFromContext = useContext(userContext);
  // console.log(dataFromContext,'dataFromContext');

  // Subscribing to store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems, "cartItems");
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg m-2 sm:bg-green-100 lg:bg-neutral-200">
      <div>
        <img className="w-56 rounded-full" src={HEADER_LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-50 m-10">
          <li className="px-4">
            Online Status:
            {onelineStatus ? (
              <span className="text-green-400">●</span>
            ) : (
              <span className="text-red-500">●</span>
            )}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery section</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="pr-2"
            onClick={() => {
              LoginStatus === "Login"
                ? setLoginStatus("Logout")
                : setLoginStatus("Login");
            }}
          >
            {LoginStatus}
          </button>
          <li className="px-4 font-bold">{dataFromContext.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
