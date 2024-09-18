import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux tool kit : (Uses immer behind the scene)
      // console.log(action.payload,'action.payload');
      state.items.push(action.payload); //mutating the state here
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    // originalSTate = {items:["pizza"]}
    clearCart: (state) => {
    //   console.log(state); //we can't read the state like this b/c redux uses proxy object for state
    //   console.log(current(state)); // here using current we can log the state easily
    //   state=[] //==> we can't mutate the state like this bcs state is a local variable here
    //   console.log(state);


        // RTk -either mutate the existing state or return a new state
      state.items.length = 0; // mutating existing state originalSTate =[]
    //   OR
    //   return {items: []} //this will be replaced inside originalSTate =[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
