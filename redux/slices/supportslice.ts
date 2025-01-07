import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  supportTickets: [] as any[], 
  activeTicket: {} as any,
};

// Redux slice
export const supportslice = createSlice({
  name: "support",
  initialState,
  reducers: {
    updateSupportTickets: (state, action: PayloadAction<any>) => {
        state.supportTickets = action.payload;
      },
      updateActiveTicket: (state, action: PayloadAction<any>) => {
        state.activeTicket = action.payload;
      },
  
   
  },
});

// Export the actions
export const {
 updateSupportTickets,
 updateActiveTicket,
//  updateUserToken,
} = supportslice.actions;

// Export the reducer
export default supportslice.reducer;
