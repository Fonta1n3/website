import React from 'react';
import image from '../images/image1.jpeg'
import ingstagram from '../images/glyph-logo_May2016.png'
import facebook from '../images/flogo_RGB_HEX-144.png'
import github from '../images/GitHub-Mark-120px-plus.png'
import twitter from '../images/Twitter_Logo_Blue.png'

const Header = () => {
  return (

    <div>

    <img className="ui small circular left floated image" src={image} />
    <a href="https://github.com/FontaineDenton" className="ui mini right floated image" target="_blank">
    <img src={github}></img>
    </a>
    <a href="https://twitter.com/F0nta1n3" className="ui mini right floated image" target="_blank">
    <img src={twitter}></img>
    </a>
    <h1 className = "ui text">
      Fontaine Denton
      <h3 className="title">
        iOS Mobile Developer
        <h5>
        fontainedenton@gmail.com
        </h5>
      </h3>
    </h1>
    </div>
  );
};
export default Header;
