export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectUserActivities = (state) =>
  state.user.profile ? state.user.profile.activities : null;
