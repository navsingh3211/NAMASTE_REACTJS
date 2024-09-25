import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import restroList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchedRestro, setSearchedRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setTimeout(() => {
      setListOfRestro(restroList);
      setSearchedRestro(restroList);
    }, 3000);
  }, []);

  const onlineStatus = useOnlineStatus();
  const {loggedInUser,setUserName} = useContext(userContext);

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline line!! Please check your internet connection.
      </h1>
    );

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
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-1.5 bg-green-100 m-4 rounded-lg"
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
        <div className="search p-4 m-4 flex items-center">
          <button
            className="px-4 py-1.5 bg-gray-300 rounded-lg"
            onClick={() => {
              setListOfRestro(listOfRestro.filter((data) => data.stars > 4.7));
            }}
          >
            Top rated Restro
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center">
          UserName: <input value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} className="border border-solid border-black p-2"/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {searchedRestro.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            {restaurant.isPromoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
