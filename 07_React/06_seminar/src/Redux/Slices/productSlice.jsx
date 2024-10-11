import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    updateProduct: (state, action) => {
      const product = state.products;
      console.log("из slice ", state.products);
      
      const index = product.findIndex((p) => p.id === action.payload.id);
      console.log("из slice ", index);

      // product.name = action.payload.name;
      // product.price = action.payload.price;
      // product.available = action.payload.available;
      // product.description = action.payload.description;
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload,
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } =
  productSlice.actions;
export default productSlice.reducer;
