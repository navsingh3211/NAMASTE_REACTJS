import { useEffect,useState } from "react";
import restroInfoList from "../utils/resInfo"

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState({});

    useEffect(()=>{
        fetchData();
    },[]);
    // const fetchData = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5971854&lng=88.43705849999999&restaurantId=14155&catalog_qa=undefined&submitAction=ENTER");
    //     const resData = await data.json();
    //     setResInfo(resData);
    // }
    const fetchData = ()=>{
        
    }
    return (
        <div className="menu">
            <h1>Name of restro</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgur</li>
                <li>Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;