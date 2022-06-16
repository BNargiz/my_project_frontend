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
    addReviews: (state, action) => {
      state.activitydetail.reviews.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  activitiesFullyFetched,
  startLoading,
  activityFetched,
  addReviews,
} = activitySlice.actions;
export default activitySlice.reducer;
