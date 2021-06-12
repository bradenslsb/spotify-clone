export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQALNyJ5hGTwaNb4Vi1gWrHWIED4aalgmlvjz_kuls6-efuxAj7XrXTMC_wqN1JhNgu3041JrRNVKWsC3ufnUP61GcMJQ6HNJUtFATgxjWLCalpOkhUtpRbr0XwxVtR3o1p5bSE-sx1-CVAd0keNZHzfLZGQ_flX",
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    case "SET_TOKEN":
    return {
      ...state,
      token: action.token
    }
    case "SET_PLAYLISTS":
      return{
        ...state,
        playlists: action.playlists,
      }
    default:
      return state
  }

}

export default reducer;