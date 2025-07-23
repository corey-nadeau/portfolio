import React from 'react'

function Navbar() {


    // styled with w3css
    return (
        <div class="w3-top w-full">
            <div class="w3-black w3-card text-center text-md">
                <a href="#" class="w3-bar-item w3-button w3-padding-large md:text-sm"><b>Corey Nadeau</b> - I.T. / Developer / Tech Enthusiast / Net Admin</a>
                <a href="#skills" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Skills</a>
                <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Contact Me</a>
                <a href="#bottom" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Social Media</a>
                <a href="https://docs.google.com/document/d/1nRvs6z0LdcZE1pg9YNyJfxC5bHJz8WeA/edit?usp=sharing&ouid=103717855117776831745&rtpof=true&sd=true" target="_blank" class="w3-bar-item w3-button 
                        w3-padding-large text-sm">Resume <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                
                
            <div class="w3-dropdown-hover">
            <button class="w3-padding-large w3-button text-sm" title="More">Projects <i class="fa fa-caret-down"></i></button> 

            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="https://minneapolis-music-flexbox.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music Flexbox <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://minneapolis-music.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://mmw3.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music W3CSS <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://kayleens-llama-farm.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Llama Farm <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://corey-recipes.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Recipe Search <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://my-fav-art.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Favorite Artwork API <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://my-music-tiles.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Spotify API <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
            </div>
            </div>
            <a href="https://www.codewars.com/users/djcjn16" target='_blank' class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">
                <img src="https://www.codewars.com/users/djcjn16/badges/small" className='flex' alt="" /></a>
            
        </div>
        </div>
    )
}

export default Navbar
