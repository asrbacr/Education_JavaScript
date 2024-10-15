import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("product-catalog") || "[]"),
};

const saveToLS = (products) => {
  localStorage.setItem("product-catalog", JSON.stringify(products));
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
        (product) => product.id !== action.payload
      );
    },
    changeProduct: (state, action) => {
      const index = state.products.findIndex((product) => {
        return product.id === action.payload.id;
      });
      if (index !== -1) {
        state.products[index] = action.payload;
        saveToLS(state.products);
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, changeProduct, toggleAvailability } =
  productSlice.actions;
export default productSlice.reducer;
