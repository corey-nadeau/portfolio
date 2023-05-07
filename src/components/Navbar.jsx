import React from 'react'

function Navbar() {
  return (
    <div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large">Corey Nadeau - Full-Stack Software Engineer</a>
    <a href="https://docs.google.com/document/d/1FFWqvdzpkjVwcUaFyqz0KI9qwcAZjIp3_d68g0ln0X0/edit" target="_blank" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Resume</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Social Media</a>
    <a href="#skills" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Skills</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Contact Me</a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="More">My Projects <i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="https://minneapolis-music-flexbox.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music Flexbox</a>
        <a href="https://minneapolis-music.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music</a>
        <a href="https://mmw3.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music W3CSS</a>
        <a href="https://kayleens-llama-farm.netlify.app/" target="_blank" class="w3-bar-item w3-button">LLama Farm</a>
        <a href="https://corey-recipes.netlify.app/" target="_blank" class="w3-bar-item w3-button">Recipe Search</a>
        <a href="http://phonebook-app-api.glitch.me/" target="_blank" class="w3-bar-item w3-button">Flask Phonebook API</a>
      </div>
      
    </div><a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small"><img src="https://www.codewars.com/users/djcjn16/badges/small" className='' alt="" /></a>
  </div>
</div>
  )
}

export default Navbar
