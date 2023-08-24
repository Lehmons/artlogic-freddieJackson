import React, { useState } from "react";
import NavStyles from "./Nav.styled";
import Menu from "./menu.svg";

export default function Nav() {
  return (
    <NavStyles>
      <p>Riverside Gallery</p>
      <ul>
        <li>
          <small>
            <a href="#" className="cta">
              Home
            </a>
          </small>
        </li>
        <li>
          <small>
            <a href="#" className="cta">
              Artworks
            </a>
          </small>
        </li>
        <li>
          <small>
            <a href="#" className="cta">
              Artists
            </a>
          </small>
        </li>
        <li>
          <small>
            <a href="#" className="cta">
              About us
            </a>
          </small>
        </li>
        <li>
          <small>
            <a href="#" className="cta">
              Contact
            </a>
          </small>
        </li>
      </ul>
      <button className="is-mobile">
        <img src={Menu} alt="menu icon" />
      </button>
    </NavStyles>
  );
}
