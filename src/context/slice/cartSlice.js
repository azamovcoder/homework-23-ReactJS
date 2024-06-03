import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveCartData = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...payload, amount: 1 }];
      }
      saveCartData(state.value);
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
      saveCartData(state.value);
    },
    increaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value?.map((el, inx) => {
        if (index === inx) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
        saveCartData(state.value);
      });
    },
    decreaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value?.map((el, inx) =>
        index === inx ? { ...payload, amount: el.amount - 1 } : el
      );
      saveCartData(state.value);
    },
    removeAll: () => {},
  },
});

export const { add, remove, increaseAmount, decreaseAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
