import React, { useState } from "react";
import FooterStyles from "./Footer.styled";

export default function Footer() {
  return (
    <FooterStyles>
      <h4>Riverside Gallery</h4>
      <ul className="address">
        <li>
          <small>Location</small>
          <span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Art Street, London, A6T 1ST
            </a>
          </span>
        </li>
        <li>
          <small>Contact</small>
          <span>
            <a href="mailto:info@riversidegallery.co.uk?subject=Enquiry">
              info@riversidegallery.co.uk
            </a>
            <a href="tel:02012345678">020 12345678</a>
          </span>
        </li>
      </ul>
      <ul className="credit">
        <li>
          <small>&copy; {new Date().getFullYear()} Riverside</small>
        </li>
        <li>
          <small>
            <a href="#" className="cta">
              Our Terms
            </a>
          </small>
        </li>
        <li>
          <small>
            <a
              href="https://artlogic.net"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Site by Artlogic
            </a>
          </small>
        </li>
      </ul>
    </FooterStyles>
  );
}
