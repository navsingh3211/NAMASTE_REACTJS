/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *      -Img
 *      -Name of Res,star rating,cuisine,description,delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -content
 */

 #config driven Ui--> a technique that allows you to create dynamic and customizable UIs without hard-coding them. You use a JSON file that specifies the type, size, position, and data source for each component

 #default export/import
 export default Header;
 import Header from "./dds/dsd";

 #named export/import
 export const FOOTER = "ddwdwd/dwdwdwd";
 import {FOOTER} from "file_path";


 #note 
 --> When ever a state variable updates,react re-renders the component
 1.) react fiber
 2.) Reconcialtion

 3.) useEffect--> useEffect get called after the component get rendered
 4.) whenever state variable update,react triggers a reconciliation cycle(re-renders the components)

<li><a href="/about">About Us</a></li>==> it reload page when re-direct to about
<li><Link to="/contact">Contact Us</Link></li> ==> it don't reload page when re-direct ==> react-router-dom==> clint side routing


# ************************************************************ #
1.) When we have huge project like swiggy (swiggy food dilivery,insta mart)
and if we keep both app in same bundle then it will be a huge bundle
therefore to avoid it we will make a different bundle for insta mart
which will be a optimized way***
(
    which is also called :
    #Chunking
    #Code spliting
    # Dynamic Bundling
    #Lazy Loading
    #on demand loading
    #dynamic import
) for it we will use lazy loading :
when our app home page get loaded then it will not load code for the grocery
it will load the grocery only when we go for the gorcery link in our app


# ************************************************************ #


# postcssrc help parcel to understand tailwind in our code

#note
1.) Lifting the state up
2.) Props drilling

#redux is external library
#but context api is inside the react and it react package
#UI layer and data layer keep both seperate  and data layer should be well structred


# Redux ToolKit start********************************************************
#  - install @reduxjs/toolkit and react-redux
#  - Build our store 
#  - Connect our store to our app
#  - Slice (cartSlice)
#  - dispatch(action)
#  - Selector
# 
# 

* Vaniall(Older) Redux ==> DoN'T Mutate the state
* const newState = [...state]
* newState.item.push(action.payload)
* return new state
* 
* But in new Verion Of redux
* :Redux tool kit : (Uses immer behind the scene)
* ==>We have mutate the state (But behind the scene redux don't mutate the state as before in vanilla and redux user immer to achive this feature)
#
# 
in side the store
# clearCart: (state) => {
    //   console.log(state); //we can't read the state like this b/c redux uses proxy object for state
    //   console.log(current(state)); // here using current we can log the state easily
    //   state=[] //==> we can't mutate the state like this bcs state is a local variable here
    //   console.log(state);

      state.items.length = 0; //=[]
    },
# 
# 
# 
# 
# Redux ToolKit end**********************************************************