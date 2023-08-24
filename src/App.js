import { useState, useEffect } from "react";
import ImageText from "./components/ImageText";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { ThemeProvider } from "styled-components";
import theme from "./components/Styles/Theme";
import GlobalStyles from "./components/Styles/GlobalStyles.js";
import Image2 from "./components/pics/image_2.png";
import Image3 from "./components/pics/image_3.png";
import Related from "./components/Related";
import Footer from "./components/Footer";

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

function App() {
  return (
    <ThemeWrapper>
      <>
        <Nav />
        <main>
          <Hero />
          <ImageText
            src={Image2}
            alt={"Thomas Jameson artist"}
            title={"Maecenas sed diam eget risus varius blandit sit amet non."}
            ctaText={"Read more"}
            body={
              "Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
            }
            direction={"image-left"}
          />
          <ImageText
            src={Image3}
            alt={"Admiring artist"}
            title={"The Armory Show"}
            subtitle={"Javits Center NY, 8-10 September 2023"}
            ctaText={"Read more"}
            body={
              "Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
            }
            direction={"image-right"}
          />
          <Related />
        </main>
        <Footer />
      </>
      <GlobalStyles />
    </ThemeWrapper>
  );
}
export default App;
