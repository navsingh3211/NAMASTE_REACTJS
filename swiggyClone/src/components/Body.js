import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";


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