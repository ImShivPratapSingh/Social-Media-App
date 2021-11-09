import axios from "axios";

const url = "https://social-media802.herokuapp.com/api/user";

export const register = (userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`${url}/register`, userData);

    dispatch({ type: "REGISTER", payload: data });
    localStorage.setItem("user", JSON.stringify(getState().user));
    data && window.location.replace("/");
  } catch (err) {
    if (err.response) {
      let error="";
      // console.log(err.response.data);
      for (const property in err.response.data) {
        error+=err.response.data[property]+"\n";
      }

      alert(error);
    }
  }
};

export const login = (userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`${url}/login`, userData);
    dispatch({ type: "LOGIN", payload: data });
    localStorage.setItem("user", JSON.stringify(getState().user));
    data && window.location.replace("/");
  } catch (err) {
    if (err.response) {
      let error="";
      // console.log(err.response.data);
      for (const property in err.response.data) {
        error+=err.response.data[property]+"\n";
      }

      alert(error);
    }
  }
};

export const logout = () => async (dispatch, getState) => {
  dispatch({ type: "LOGOUT", payload: null });
  localStorage.removeItem("user");
};
