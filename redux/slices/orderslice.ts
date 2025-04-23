import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  orders: [] as any[], 
  activeOrder: {} as any,
  current_page: 1,
  from : 0,
last_page: 0,
per_page: 0,
to : 0,
total : 0,
};

// Redux slice
export const orderslice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrders: (state, action: PayloadAction<any>) => {
        state.orders = action.payload;
      },
      updateOrderPagination: (state, action: PayloadAction<any>) => {
        state.current_page = action.payload.current_page;
        state.from = action.payload.from;
        state.last_page = action.payload.last_page;
        state.per_page = action.payload.per_page;
        state.to = action.payload.to;
        state.total = action.payload.total
      },
      updateActiveOrder: (state, action: PayloadAction<any>) => {
        state.activeOrder = action.payload;
      },
  },
});

// Export the actions
export const {
 updateOrders,
 updateActiveOrder,
 updateOrderPagination
} = orderslice.actions;

// Export the reducer
export default orderslice.reducer;
