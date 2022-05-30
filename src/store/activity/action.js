import axios from "axios";
import { apiUrl } from "../../config/constants";
import { startLoading, activitiesFullyFetched } from "./slice";

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
