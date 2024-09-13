import { HEADER_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [LoginStatus, setLoginStatus] = useState("Login");
  const onelineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-neutral-200 shadow-lg m-2">
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
          <li className="px-4">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
