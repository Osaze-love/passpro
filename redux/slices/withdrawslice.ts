import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  withdrawals: [] as any[], 
  activeWithdrawal: {} as any,
  current_page: 1,
  from : 0,
last_page: 0,
per_page: 0,
to : 0,
total : 0,
countData: {} as any,
};

// Redux slice
export const withdrawslice = createSlice({
  name: "withdraw",
  initialState,
  reducers: {
    updateWithdrawals: (state, action: PayloadAction<any>) => {
        state.withdrawals = action.payload;
      },
      updateActiveWithdrawal: (state, action: PayloadAction<any>) => {
        state.activeWithdrawal = action.payload;
      },
      updateCountData: (state, action: PayloadAction<any>) => {
        state.countData = action.payload;
      },
      updateWithdrawPagination: (state, action: PayloadAction<any>) => {
        state.current_page = action.payload.current_page;
        state.from = action.payload.from;
        state.last_page = action.payload.last_page;
        state.per_page = action.payload.per_page;
        state.to = action.payload.to;
        state.total = action.payload.total
      },
  
   
  },
});

// Export the actions
export const {
 updateWithdrawals,
 updateActiveWithdrawal,
 updateWithdrawPagination,
 updateCountData
} = withdrawslice.actions;

// Export the reducer
export default withdrawslice.reducer;
