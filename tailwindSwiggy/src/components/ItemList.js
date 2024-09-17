import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items, "item is want");

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    //dispatch an action
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-left">
              <span className="font-bold">{item.name}</span>
              <br></br>
              <span className="font-bold">₹{item.cost}</span>
            </div>
            <p className="text-sm text-left p-1">{item.Description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-1 mx-5 bg-black text-white shadow-lg rounded-lg"
                onClick={()=> handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={item.logo} className="w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
