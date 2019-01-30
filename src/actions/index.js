export const selectUser = user => {
  console.log("You clicked on user:", user.name);
  return {
    type: "USER_SELECTED",
    payload: user
  };
};

export const saveUserAction = user => {
  console.log("Saved user data:", user);
  return {
    type: "SAVE_USER_DATA",
    payload: user
  };
};
