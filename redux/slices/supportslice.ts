import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  supportTickets: [] as any[], 
  activeTicket: {} as any,
  activeTicketDetails: [] as any[],
  current_page: 1,
last_page: 0,
per_page: 10,
total : 0,
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
      updateActiveTicketDetails: (state, action: PayloadAction<any>) => {
        state.activeTicketDetails = action.payload;
      },
      updateSupportPagination: (state, action: PayloadAction<any>) => {
        state.current_page = action.payload.current_page;
        state.last_page = action.payload.last_page;
        state.total = action.payload.total
      },
  
   
  },
});

// Export the actions
export const {
 updateSupportTickets,
 updateActiveTicket,
 updateSupportPagination, 
 updateActiveTicketDetails
//  updateUserToken,
} = supportslice.actions;

// Export the reducer
export default supportslice.reducer;
