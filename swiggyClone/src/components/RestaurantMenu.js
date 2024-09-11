import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import restroInfoList from "../utils/resInfo"
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(typeof resId,'resId');
    

    useEffect(()=>{
        fetchData();
    },[]);
    // const fetchData = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5971854&lng=88.43705849999999&restaurantId=14155&catalog_qa=undefined&submitAction=ENTER");
    //     const resData = await data.json();
    //     setResInfo(resData);
    // }
    const fetchData = ()=>{
        setResInfo(restroInfoList.filter((data)=>data.id === parseInt(resId) ));
    }
    // console.log(resInfo);
    if(resInfo === null) return <Shimmer/>;

    return (
        <div className="menu">
            <h1>{resInfo[0].resName}</h1>
            <h2>Menu</h2>
            <ul>
                {resInfo[0].cuisine.split(",").map((data)=>(
                    <li key={data}>{data}</li>
                ))}
                <li>Water</li>
                <li>Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;