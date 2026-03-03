import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    items: [], // For cart items
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      // action.payload = product object
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setSearch ,addToCart,removeFromCart,clearCart} = searchSlice.actions;

export default searchSlice.reducer;
