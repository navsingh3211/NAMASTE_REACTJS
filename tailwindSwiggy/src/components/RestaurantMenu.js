import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restroInfoList from "../utils/resInfo";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex] = useState(null);

  const { resId } = useParams();
  // console.log(typeof resId,'resId');

  //we can create a seperate hook for fetching card data
  useEffect(() => {
    fetchData();
  }, []);
  // const fetchData = async ()=>{
  //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5971854&lng=88.43705849999999&restaurantId=14155&catalog_qa=undefined&submitAction=ENTER");
  //     const resData = await data.json();
  //     setResInfo(resData);
  // }
  const fetchData = () => {
    setResInfo(restroInfoList.filter((data) => data.id === parseInt(resId)));
  };
  // console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{resInfo[0].resName}</h1>
      <p className="font-bold text-lg">{resInfo[0].cuisine}</p>
      {/* categories accordians */}
      {resInfo[0].categories.map((category,index) => (

        //controlled component
        <RestaurantCategory
          data={category}
          showItems={index === showIndex ? true:false}
          setShowIndex = {()=> setShowIndex(index)}
          key={category.title}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
