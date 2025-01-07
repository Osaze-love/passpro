import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  withdrawals: [] as any[], 
  activeWithdrawal: {} as any,
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
  
   
  },
});

// Export the actions
export const {
 updateWithdrawals,
 updateActiveWithdrawal,
//  updateUserToken,
} = withdrawslice.actions;

// Export the reducer
export default withdrawslice.reducer;
