import {HEADER_LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [LoginStatus,setLoginStatus] = useState("Login");
    
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={HEADER_LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                LoginStatus === "Login" ? setLoginStatus("Logout") : setLoginStatus("Login")
            }}>{LoginStatus}</button> 
          </ul>
        </div>
      </div>
    );
};

export default Header;