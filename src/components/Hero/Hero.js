import React, { useState } from "react";
import HeroStyles from "./Hero.styled";
import HeroImage from "../pics/Hero Image.png";
import SectionFadeIn from "../SectionFadeIn";

export default function Hero() {
  return (
    <HeroStyles>
      <div className="text">
        <small>New Exhibition</small>
        <h1>Thomas Jameson</h1>
        <h2>Exploration in two dimensions</h2>
      </div>
      <SectionFadeIn>
        <img src={HeroImage} alt="Thomas Jameson" />
      </SectionFadeIn>
    </HeroStyles>
  );
}
