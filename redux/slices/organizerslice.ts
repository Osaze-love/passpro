import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  organizers: [] as any[], 
  activeOrganizer: {} as any,
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
  
   
  },
});

// Export the actions
export const {
 updateOrganizers,
 updateActiveOrganizer,
//  updateUserToken,
} = organizerslice.actions;

// Export the reducer
export default organizerslice.reducer;
