import React from "react";
import ReactDom from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -content
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855-768x591.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
