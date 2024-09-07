import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(restroList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestro(listOfRestro.filter((data) => data.stars > 4.0));
          }}
        >
          Top rated Restro
        </button>
      </div>
      <div className="res-container">
        {listOfRestro.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
