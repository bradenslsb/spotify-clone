import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"
import { useDataLayerValue } from "./DataLayer"

//Comment to see why my github isn't reconizing my commits


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)
  const [{ user }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })
    }


    console.log("I have a token so take that" , token)
  }, []);

  console.log("person/ the user logged in", user)


  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
