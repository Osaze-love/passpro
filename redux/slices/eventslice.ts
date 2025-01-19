import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  events: [] as any[], 
  activeEvent: {} as any,
  current_page: 1,
  from : 0,
last_page: 0,
per_page: 0,
to : 0,
total : 0,
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
      updatePaginationData: (state, action: PayloadAction<any>) => {
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
 updateEvents,
 updateActiveEvent,
 updatePaginationData
} = eventslice.actions;

// Export the reducer
export default eventslice.reducer;
