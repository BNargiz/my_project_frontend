import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import activityReducer from "./activity/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    activity: activityReducer,
  },
});
