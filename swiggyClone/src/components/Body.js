import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setListOfRestro(restroList);
    }, 3000);
  }, []);

  //   //conditional rendering
  //   if (listOfRestro.length === 0) {
  //     return <Shimmer/>;
  //   }

  //   useEffect(()=>{
  //     fetchData();
  //   },[]);
  //   const fetchData = async()=>{
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6035086&lng=88.4525012&is-seo-homepage-enabled=true&page_type=DES");
  //     const json = await data.json();
  //     console.log(json,'json')
  //     setListOfRestro(json);
  //   }

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
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
