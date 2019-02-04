export const saveUserAction = user => {
  console.log("Saved user data:", user);
  return {
    type: "SAVE_USER_DATA",
    payload: user
  };
};
