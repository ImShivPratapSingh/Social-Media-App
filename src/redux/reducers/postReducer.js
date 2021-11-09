const postFromLocalStorage=localStorage.getItem("post")?JSON.parse(localStorage.getItem("post")):null;

const reducers = (
  state = {
    posts: [],
    post: postFromLocalStorage,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: payload,
      };

    case "CREATE_POST":
      return {
        ...state,
        posts: [payload, ...state.posts],
      };

    case "GET_POST": {
      return {
        ...state,
        post: payload,
      };
    }

    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((curr) => curr._id !== payload),
      };
    }

    case "LIKE_POST":
    case "UNLIKE_POST":
      return {
        ...state,
        posts: state.posts.map((curr) =>
          curr._id === payload._id ? payload : curr
        ),
      };

    case "ADD_COMMENT":
    case "DELETE_COMMENT":
      return {
        ...state,
        post: payload,
      };

    default:
      return state;
  }
};

export default reducers;
