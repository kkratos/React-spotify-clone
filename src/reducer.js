export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after developing
//   token: 'BQAaHkxpE0P-dIpmnousDKco3SAZ5lX0Jc0B1vDthgHWwJgLkhnq9hfhxnfscidEN025GGIXgliN_xHlp1NyKL6oT_BONcS84RMR8N7rlkvwILKtZD_QUcuIQZRNsTobEJ397h4tkHSJtl1c9VQTjlzS7aieTSVL'
};

const reducer = (state, action) => {
  //   console.log(action);
  // console.log(state);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
