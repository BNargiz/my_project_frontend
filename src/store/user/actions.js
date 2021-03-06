import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import {
  deleteActivity,
  loginSuccess,
  logOut,
  tokenStillValid,
  createNewActivity,
  activityUpdated,
} from "./slice";

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid({ user: response.data }));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const deleteOneActivity = (id) => async (dispatch, getState) => {
  const token = getState().user.token;
  try {
    const response = await axios.delete(`${apiUrl}/activities/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("deleted activity", response.data);
    dispatch(deleteActivity({ activityId: id }));
    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "Your post has been deleted!",
        1500
      )
    );
  } catch (e) {
    console.log(e.message);
  }
};
export const newActivityCreated =
  ({
    title,
    description,
    location,
    // address,
    price,
    image,
    email,
    phone,
    date,
    age,
  }) =>
  async (dispatch, getState) => {
    try {
      const coordinatesResponse = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          location
        )}&apiKey=eb6ac5328784421190b50a37700f0689`
      );

      const latitude =
        coordinatesResponse.data.features[0].geometry.coordinates[1];
      const longitude =
        coordinatesResponse.data.features[0].geometry.coordinates[0];

      console.log(
        // title,
        // description,
        // location,
        longitude,
        latitude
        // price,
        // image,
        // email,
        // phone,
        // date,
        // age
      );
      const { token, profile } = getState().user;
      // dispatch(appLoading());

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
      dispatch(
        showMessageWithTimeout("success", true, "The activity was posted", 1900)
      );
    } catch (e) {
      console.log(e.message);
    }
  };

export const updateMyPost = (
  id,
  title,
  description,
  location,
  price,
  imageUrl,
  email,
  phone,
  date,
  ageRange
) => {
  return async (dispatch, getState) => {
    const coordinatesResponse = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        location
      )}&apiKey=eb6ac5328784421190b50a37700f0689`
    );

    const latitude =
      coordinatesResponse.data.features[0].geometry.coordinates[1];
    const longitude =
      coordinatesResponse.data.features[0].geometry.coordinates[0];

    console.log(longitude, latitude);
    try {
      const { token } = getState().user;
      // const { activities } = getState().user.profile;
      // dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/activities/modify/${id}`,
        {
          title,
          description,
          location,
          price,
          imageUrl,
          email,
          phone,
          date,
          ageRange,
          longitude,
          latitude,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(activityUpdated(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e);
    }
  };
};
