import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";
import Player from "./player";
import "./App.css";
import Login from "./login";

const spotify = new SpotifyWebApi();
// console.log(spotify);

function App() {
  // const [setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();
  // console.log(useDataLayerValue());
  //Run Code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("37i9dQZEVXcLLjgfItU3St").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
    // console.log("I have A Token ", token);
  }, [dispatch]);

  // console.log("😀", user);
  // console.log("🚀", token);
  return (
    <div className="App">
      {token ? <Player spotify /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
