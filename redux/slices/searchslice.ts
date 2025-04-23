import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  events: [] as any[],   
  orders: [] as any[],
  support: [] as any[],
  withdrawals: [] as any[],
  organizers: [] as any[],
  dashboardData: {} as any,
};

// Redux slice
export const searchslice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateGlobalSearch: (state, action: PayloadAction<any>) => {
        state.events = action.payload.events;
        state.orders = action.payload.orders;
        state.support = action.payload.support_tickets;
        state.withdrawals = action.payload.transactions;
        state.organizers = action.payload.users;

      },
      updateDashboardData: (state, action: PayloadAction<any>) => {
        state.dashboardData = action.payload;
      

      },
  },
});

export const {
 updateGlobalSearch,
 updateDashboardData
} = searchslice.actions;

// Export the reducer
export default searchslice.reducer;
