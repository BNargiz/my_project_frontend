import axios from "axios";
import { apiUrl } from "../../config/constants";
import { startLoading, activitiesFullyFetched, activityFetched } from "./slice";

export const fetchActivities = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/activities`);
    console.log("response", response);

    const activities = response.data;
    // console.log("response", artworks);
    dispatch(activitiesFullyFetched(activities));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchActivityById = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/activities/${id}`);
    // console.log("response", response.data);

    const activity = response.data;

    dispatch(activityFetched(activity));
  } catch (e) {
    console.log(e.message);
  }
};
