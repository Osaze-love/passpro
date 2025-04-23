import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  usersDetail: {} as any, // Array of users
  userToken: '' as any,
};

// Redux slice
export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDetail: (state, action: PayloadAction<any>) => {
        state.usersDetail = action.payload;
      },
      updateUserToken: (state, action: PayloadAction<any>) => {
        state.userToken = action.payload;
      },
      resetState: (state) => {
        state.userToken = '';
        state.usersDetail = {};
      },
   
  },
});

// Export the actions
export const {
 updateUserDetail,
 updateUserToken,
 resetState,
} = userslice.actions;

// Export the reducer
export default userslice.reducer;
