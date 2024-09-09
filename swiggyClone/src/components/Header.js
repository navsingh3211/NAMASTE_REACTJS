import {HEADER_LOGO_URL} from "../utils/constants";
import {useState} from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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