import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activities: [],

  loading: true,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    activitiesFullyFetched: (state, action) => {
      state.activities = action.payload;
      state.loading = false;
    },
  },
});

export const { activitiesFullyFetched, startLoading } = activitySlice.actions;
export default activitySlice.reducer;
