import React, { useState } from "react";
import RelatedStyles from "./Related.styled";
import Image4 from "../pics/image_4.png";
import Image5 from "../pics/image_5.png";
import Image6 from "../pics/image_6.png";
import Image7 from "../pics/image_7.png";
import SectionFadeIn from "../SectionFadeIn";

export default function Related() {
  return (
    <RelatedStyles>
      <small>Works by other makers</small>
      <ul>
        <li>
          <a href="#">
            <SectionFadeIn>
              <img src={Image4} alt="alt text" />
            </SectionFadeIn>
          </a>
          <h4>Nibh Vulputate</h4>
          <small>
            <a href="#">Consectetur Venenatis</a>
          </small>
        </li>
        <li>
          <a href="#">
            <SectionFadeIn>
              <img src={Image5} alt="alt text" />
            </SectionFadeIn>
          </a>
          <h4>Nibh Vulputate</h4>
          <small>
            <a href="#">Consectetur Venenatis</a>
          </small>
        </li>
        <li>
          <a href="#">
            <SectionFadeIn>
              <img src={Image6} alt="alt text" />
            </SectionFadeIn>
          </a>
          <h4>Nibh Vulputate</h4>
          <small>
            <a href="#">Consectetur Venenatis</a>
          </small>
        </li>
        <li>
          <a href="#">
            <SectionFadeIn>
              <img src={Image7} alt="alt text" />
            </SectionFadeIn>
          </a>
          <h4>Nibh Vulputate</h4>
          <small>
            <a href="#">Consectetur Venenatis</a>
          </small>
        </li>
      </ul>
    </RelatedStyles>
  );
}
