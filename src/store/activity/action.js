import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  startLoading,
  activitiesFullyFetched,
  activityFetched,
  addReviews,
} from "./slice";

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

export const createReviews =
  ({ name, text, date }) =>
  async (dispatch, getState) => {
    try {
      const { activitydetail } = getState().activity;
      const { token } = getState().user;
      dispatch(startLoading());
      const response = await axios.post(
        `${apiUrl}/reviews/${activitydetail.id}`,
        {
          name,
          text,
          date,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("e", response.data);

      dispatch(addReviews(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
