import React from 'react'
import ribs from '../assets/ribs.jpg'

const Spotify = () => {
    let playSong;
const clientId = "99707647c8c34b5984cca216921a2f53";
const clientSecret = "112abdfe335d46f4ae20d3b2efccd880";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token
}

// bob dylan call

async function clickedEventDylan(){
  let track = 'bob dylan knockin on heavens door'
  let token = await _getToken();
  let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`]
  ]);
  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
      method: 'GET',
      headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)
  let song = response.tracks.items[0].preview_url

  if (playSong){
      stopSnippet();
  }
  songSnippet(song);
}

function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

function stopSnippet(){
    return playSong.pause();
}
  return (
    <div>
      
    </div>
  )
}

export default Spotify
