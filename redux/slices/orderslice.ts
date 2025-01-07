import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  orders: [] as any[], 
};

// Redux slice
export const orderslice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrders: (state, action: PayloadAction<any>) => {
        state.orders = action.payload;
      },
    //   updateUserToken: (state, action: PayloadAction<any>) => {
    //     state.userToken = action.payload;
    //   },
   
  },
});

// Export the actions
export const {
 updateOrders,
//  updateUserToken,
} = orderslice.actions;

// Export the reducer
export default orderslice.reducer;
