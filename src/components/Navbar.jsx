import React from 'react'

function Navbar() {


    // styled with w3css
    return (
        <div class="w3-top w-full">
            <div class="w3-black w3-card text-center text-sm">
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><b>Corey Nadeau</b> - Full-Stack Software Engineer</a>
                <a href="#skills" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Skills</a>
                <a href="#contact" class="w3-bar-item w3-button w3-padding-large">Contact Me</a>
                <a href="#bottom" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Social Media</a>
                <a href="https://docs.google.com/document/d/1nRvs6z0LdcZE1pg9YNyJfxC5bHJz8WeA/edit?usp=sharing&ouid=103717855117776831745&rtpof=true&sd=true" target="_blank" class="w3-bar-item w3-button 
                        w3-padding-large">Resume <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                
                
            <div class="w3-dropdown-hover">
            <button class="w3-padding-large w3-button" title="More">My Projects <i class="fa fa-caret-down"></i></button> 

            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="https://minneapolis-music-flexbox.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music Flexbox <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://minneapolis-music.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://mmw3.netlify.app/" target="_blank" class="w3-bar-item w3-button">Minneapolis Music W3CSS <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://kayleens-llama-farm.netlify.app/" target="_blank" class="w3-bar-item w3-button">Llama Farm <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://corey-recipes.netlify.app/" target="_blank" class="w3-bar-item w3-button">Recipe Search <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="http://phonebook-app-api.glitch.me/" target="_blank" class="w3-bar-item w3-button">Flask Phonebook API <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://my-fav-art.netlify.app/" target="_blank" class="w3-bar-item w3-button">Favorite Artwork API <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://my-music-tiles.netlify.app/" target="_blank" class="w3-bar-item w3-button">Spotify API <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
            </div>
            </div>
            <a href="https://www.codewars.com/users/djcjn16" target='_blank' class="w3-bar-item w3-button w3-padding-large w3-hide-small">
                <img src="https://www.codewars.com/users/djcjn16/badges/small" className='flex' alt="" /></a>
            
        </div>
        </div>
    )
}

export default Navbar
