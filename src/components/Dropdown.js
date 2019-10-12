import React, { useState } from 'react';


export const Dropdown = () => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
 
    return (    
        <div>
            <h1 class="font-effect-fire-animation">Florida Man</h1>
            <div className="dropdown">
                <button onClick={(myFunction)} class="dropbtn">Signs</button>
                
                <div id="myDropdown" class="dropdown-content">
                    <p onClick={(myFunction)}>Aquarius</p>
                    <p onClick={(myFunction)}>Pisces</p>
                    <p onClick={(myFunction)}>Aries</p>
                    <p onClick={(myFunction)}>Taurus</p>
                    <p onClick={(myFunction)}>Gemini</p>
                    <p onClick={(myFunction)}>Cancer</p>
                    <p onClick={(myFunction)}>Leo</p>
                    <p onClick={(myFunction)}>Virgo</p>
                    <p onClick={(myFunction)}>Libra</p>
                    <p onClick={(myFunction)}>Scorpio</p>
                    <p onClick={(myFunction)}>Sagittarius</p>
                    <p onClick={(myFunction)}>Capricorn</p>
                </div>
            </div> 
        </div>
    );
}

