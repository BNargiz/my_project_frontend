import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  startLoading,
  activitiesFullyFetched,
  activityFetched,
  createNewActivity,
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

export const newActivityCreated =
  ({
    title,
    description,
    location,
    longitude,
    latitude,
    price,
    image,
    email,
    phone,
    date,
    age,
  }) =>
  async (dispatch, getState) => {
    try {
      console.log(
        title,
        description,
        location,
        longitude,
        latitude,
        price,
        image,
        email,
        phone,
        date,
        age
      );
      const { token, profile } = getState().user;
      dispatch(startLoading());
      const response = await axios.post(
        `${apiUrl}/activities/${profile.id}/post`,
        {
          title,
          description,
          location,
          longitude,
          latitude,
          price,
          image,
          email,
          phone,
          date,
          age,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("new ativity", response.data);
      dispatch(createNewActivity(response.data));
      // dispatch(
      //   showMessageWithTimeout("success", true, "The artwork was posted", 1700)
      // );
    } catch (e) {
      console.log(e.message);
    }
  };
