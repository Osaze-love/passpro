import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  events: [] as any[], 
  activeEvent: {} as any,
};

// Redux slice
export const eventslice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateEvents: (state, action: PayloadAction<any>) => {
        state.events = action.payload;
      },
      updateActiveEvent: (state, action: PayloadAction<any>) => {
        state.activeEvent = action.payload;
      },
  
   
  },
});

// Export the actions
export const {
 updateEvents,
 updateActiveEvent,
//  updateUserToken,
} = eventslice.actions;

// Export the reducer
export default eventslice.reducer;
