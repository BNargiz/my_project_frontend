import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    deleteActivity: (state, action) => {
      const activityId = action.payload.activityId;
      state.profile.activities = state.profile.activities.filter(
        (a) => a.id !== activityId
      );
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, deleteActivity } =
  userSlice.actions;

export default userSlice.reducer;
