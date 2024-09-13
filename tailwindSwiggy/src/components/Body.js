import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchedRestro, setSearchedRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setListOfRestro(restroList);
      setSearchedRestro(restroList);
    }, 3000);
  }, []);

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return <h1>Looks like you are offline line!! Please check your internet connection.</h1>


  //whenever state variable update,react triggers a reconciliation cycle(re-renders the components)
  console.log("body render");

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
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-6 py-1.5 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              let searchedData = listOfRestro.filter((res) =>
                res.resName.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchedRestro(searchedData);
            }}
          >
            Search
          </button>
        </div>
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
        {searchedRestro.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
