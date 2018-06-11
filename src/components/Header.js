import React, { Component } from 'react';
import { wave } from '../assets/wavy1.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <svg className="wave" width="8148" height="1164" viewBox="0 0 8148 1164" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="wave-path" d="M1096.5 128C828.5 -59 127.5 87.5 0 289.5H2034.5V0C1984.5 159 1364.5 315 1096.5 128Z" transform="translate(6 2) scale(4)" stroke="black"/>
        </svg>
      </div>
    )
  }
}

export default Header;
