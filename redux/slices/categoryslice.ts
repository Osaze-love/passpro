import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  categories: [] as any[], // Array of users
//   userToken: '' as any,
};

// Redux slice
export const categoryslice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategories: (state, action: PayloadAction<any>) => {
        state.categories = action.payload;
      },
    //   updateUserToken: (state, action: PayloadAction<any>) => {
    //     state.userToken = action.payload;
    //   },
   
  },
});

// Export the actions
export const {
 updateCategories,
//  updateUserToken,
} = categoryslice.actions;

// Export the reducer
export default categoryslice.reducer;
