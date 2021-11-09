const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;


const reducer = (user = userFromLocalStorage, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.payload;

    case "LOGOUT":
      return action.payload;

    default:
      return user;
  }
};

export default reducer;
