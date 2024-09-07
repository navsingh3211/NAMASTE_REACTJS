import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *      -Img
 *      -Name of Res,star rating,cuisine,description,delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -content
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
