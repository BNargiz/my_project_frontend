export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectUserActivities = (state) =>
  state.user.profile ? state.user.profile.activities : null;

export const selectMyoneActivity = (id) => (state) => {
  return state.user.profile.activities.find((a) => a.id === id);
};
