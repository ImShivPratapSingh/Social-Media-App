import axios from "axios";
const url = "https://social-media802.herokuapp.com/api/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (err) {
    err.response && console.log(err.response.data);
  }
};

export const createPost = (name, body, avatar) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, { name, body, avatar });
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (err) {
    if (err.response) {
      let error = "";
      // console.log(err.response.data);
      for (const property in err.response.data) {
        error += err.response.data[property] + "\n";
      }

      alert(error);
    }
  }
};

export const getPost = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    dispatch({ type: "GET_POST", payload: data });
    localStorage.setItem("post", JSON.stringify(data));
  } catch (err) {
    err.response && console.log(err.response.data);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
    alert(data.message);
  } catch (err) {
    err.response && console.log(err.response.data);
  }
};

export const likePost = (id, email) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/like/${id}`, { email });

    dispatch({ type: "LIKE_POST", payload: data });
  } catch (err) {
    err.response && console.log(err.response.data);
  }
};

export const unLikePost = (id, email) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/unlike/${id}`, { email });

    dispatch({ type: "LIKE_POST", payload: data });
  } catch (err) {
    err.response && console.log(err.response.data);
  }
};

export const addComment =
  (name, content, avatar, post_id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.patch(`${url}/comment/${post_id}`, {
        name,
        content,
        avatar,
      });

      dispatch({ type: "ADD_COMMENT", payload: data });
      localStorage.setItem("post", JSON.stringify(data));
    } catch (err) {
      if (err.response) {
        let error = "";
        // console.log(err.response.data);
        for (const property in err.response.data) {
          error += err.response.data[property] + "\n";
        }

        alert(error);
      }
    }
  };

export const deleteComment =
  (post_id, comment_id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.patch(
        `${url}/comment/${post_id}/${comment_id}`
      );

      dispatch({ type: "DELETE_COMMENT", payload: data });
      localStorage.setItem("post", JSON.stringify(data));
    } catch (err) {
      err.response && console.log(err.response.data);
    }
  };
