export default function(state = null, action) {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return action.payload;
  }
  return state;
}
