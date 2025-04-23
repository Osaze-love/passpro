import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  organizers: [] as any[], 
  activeOrganizer: {} as any,
  current_page: 1,
  organizerEmails: [] as any[],
  from : 0,
last_page: 0,
per_page: 0,
to : 0,
total : 0,
countData: {} as any,

};

// Redux slice
export const organizerslice = createSlice({
  name: "organizer",
  initialState,
  reducers: {
    updateOrganizers: (state, action: PayloadAction<any>) => {
        state.organizers = action.payload;
      },
      updateActiveOrganizer: (state, action: PayloadAction<any>) => {
        state.activeOrganizer = action.payload;
      },
      updateOrganizerCount: (state, action: PayloadAction<any>) => {
        state.countData = action.payload;
      },
      updateOrganizerPagination: (state, action: PayloadAction<any>) => {
        state.current_page = action.payload.current_page;
        state.from = action.payload.from;
        state.last_page = action.payload.last_page;
        state.per_page = action.payload.per_page;
        state.to = action.payload.to;
        state.total = action.payload.total
      },
      updateOrganizerEmails: (state, action: PayloadAction<any>) => {
        state.organizerEmails = action.payload;
      },
  
   
  },
});

// Export the actions
export const {
 updateOrganizers,
 updateActiveOrganizer,
 updateOrganizerPagination,
 updateOrganizerCount,
 updateOrganizerEmails
//  updateUserToken,
} = organizerslice.actions;

// Export the reducer
export default organizerslice.reducer;
