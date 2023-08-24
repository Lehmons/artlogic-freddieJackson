import React, { useState } from "react";
import ImageTextStyles from "./ImageText.styled";
import SectionFadeIn from "../SectionFadeIn";

export default function ImageText({
  title,
  subtitle,
  src,
  alt,
  body,
  ctaText,
  direction,
}) {
  return (
    <ImageTextStyles className={`is-${direction}`}>
      <SectionFadeIn>
        <a href="#">
          <img src={src} alt={alt} />
        </a>
      </SectionFadeIn>
      <div className="text">
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{body}</p>
        <a href="#" className="cta">
          <small>{ctaText}</small>
        </a>
      </div>
    </ImageTextStyles>
  );
}
