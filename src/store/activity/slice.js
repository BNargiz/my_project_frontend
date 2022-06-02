import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activities: [],
  activitydetail: null,
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
    activityFetched: (state, action) => {
      state.activitydetail = action.payload;
      state.loading = false;
    },
    createNewActivity: (state, action) => {
      state.activities.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  activitiesFullyFetched,
  startLoading,
  activityFetched,
  createNewActivity,
} = activitySlice.actions;
export default activitySlice.reducer;
