import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import profileJpg from "./images/profile-jpg.jpg";
import ProfilSvg from "./images/profile-svg.svg";
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
    margin:0;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  margin: auto;
  display: flex;
`;
const FrameImage = styled.div`
  position: relative;
  overflow: hidden;
  margin: auto;
`;
const LazyImage = styled.img<{ visible: number }>`
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: ${({ visible }) => visible};
  object-position: center center;
  transition: opacity 800ms ease 0s;
`;

const MainImage = styled.img<{ visible: number }>`
  opacity: ${({ visible }) => visible};
  transition: opacity 800ms ease 0s;
`;
function App() {
  const [visible, setVisible] = useState(true);
  const handleOnLoad = () => {
    console.log("loaded");
    setVisible(false);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <FrameImage>
          <LazyImage src={ProfilSvg} alt={"svg"} visible={visible ? 1 : 0} />
          <picture>
            <source srcSet={profileJpg} />
            <MainImage
              src={profileJpg}
              alt="jpg"
              visible={visible ? 0 : 1}
              onLoad={handleOnLoad}
            />
          </picture>
        </FrameImage>
      </Container>
    </>
  );
}

export default App;
