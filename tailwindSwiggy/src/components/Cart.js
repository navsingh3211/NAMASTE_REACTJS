import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);//subscribing the store to get data from store
    // console.log(cartItems,'cartItems cartItems cartItems')
    const dispatch = useDispatch();

    const clearCartFunc = ()=>{
        dispatch(clearCart()); //dispatch the action
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-slate-400 rounded-lg" onClick={clearCartFunc}>Clear cart</button>
                <ItemList items={cartItems}/>
                {cartItems.length === 0 && <h2 className="font-bold">Your cart is empty</h2>}
                
                
            </div>
        </div>
    )
}

export default Cart;