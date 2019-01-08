import React from 'react';
import image from '../images/image1.jpeg'
import ingstagram from '../images/glyph-logo_May2016.png'
import facebook from '../images/flogo_RGB_HEX-144.png'
import github from '../images/GitHub-Mark-120px-plus.png'
import twitter from '../images/Twitter_Logo_Blue.png'

const BioDetail = () => {
  return (
    <div className="ui segment" >
        <a href="https://github.com/FontaineDenton/BitKey" className="ui mini right floated image">
        <img src={github}></img>
        </a>
        <a href="https://github.com/FontaineDenton/BitKey" className="ui mini right floated image">
        <img src={facebook}></img>
        </a>
        <a href="https://github.com/FontaineDenton/BitKey" className="ui mini right floated image">
        <img src={ingstagram}></img>
        </a>
        <a href="https://github.com/FontaineDenton/BitKey" className="ui mini right floated image">
        <img src={twitter}></img>
        </a>
        <h1 className = "ui text">
          Fontaine Denton
          <h3 className="title">
            iOS Developer
          </h3>
        </h1>
        <img className="ui small circular left floated image" src={image} />
        <p>
        I am a self taught iOS Developer with a real passion for programming,
        Bitcoin, underwater photography, surfing and above all my beautiful
        wife and three kids. Swift is my langauge of choice but I also have experience
        in React/Redux, Python and C#. For the past ten years I’ve been based in Bali, Indonesia. 
        I found myself in Bali after a lifetime of traveling the world as a Scuba diving
        instructor in places like Palau, Yap, Guam, Canary Islands, the Grenadines and the
        Bay Islands of Honduras. The recreational diving profession led me to
        a commercial diving career as an engineer in the oil and gas industry.
        Whilst spending time on the rigs (and underwater) I had ample time to
        pursue my true professional passion, which I found to be computer programming.
        I got started with an online tutorial for making an iOS app three years ago
        and have not stopped coding since! I have had a handful of apps published
        on the app store and my mind is constantly spinning with ideas for new software.
        I am always expanding my horizons learning new languages and platforms.
        </p>
    </div>
  );
};
export default BioDetail;
