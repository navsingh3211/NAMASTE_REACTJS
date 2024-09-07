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
 *      -Img
 *      -Name of Res,star rating,cuisine,description,delivery time
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

const restroList = [
  {
    id:123,
    logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/8a91734c-c8a1-4089-b467-f9472618b742_719437.JPG",
    resName:"Azad Hind Dhaba",
    cuisine:"Sarso da saag,maake roti,Aaloo partha",
    stars:"4.4",
    deleveryTime:"39 minutes"
  },
  {
    id:124,
    logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/8a91734c-c8a1-4089-b467-f9472618b742_719437.JPG",
    resName:"Simla Birayani",
    cuisine:"Chicken biryani,Aaloo partha,daal tadka",
    stars:"4.9",
    deleveryTime:"30 minutes"
  },
  {
    id:125,
    logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/8a91734c-c8a1-4089-b467-f9472618b742_719437.JPG",
    resName:"Bikkegan",
    cuisine:"Haidrabaadi biryani",
    stars:"4.6",
    deleveryTime:"50 minutes"
  },
]
const RestaurantCard = (props) => {
  const {resData} = props;
    // console.log(resData,'resData');
  const {logo,resName,cuisine,stars,deleveryTime} = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={logo}
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{deleveryTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          restroList.map((restaurant)=> <RestaurantCard key = {restaurant.id} resData = {restaurant}/>)
        }
      </div>
    </div>
  );
};
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
