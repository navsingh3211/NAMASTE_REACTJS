import RestaurantCard from "./RestaurantCard";

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

export default Body;