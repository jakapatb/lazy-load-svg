import React, { useState } from "react";
import styled from "styled-components";

const FrameImage = styled.div`
  max-width: 100vw;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
`;
const LazyImage = styled.img<{ visible: number; mode: string }>`
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  ${({ mode }) => mode === "blur" && "filter: blur(16px);"}
  opacity: ${({ visible }) => visible};
  object-position: center center;
  transition: opacity 800ms ease 0s;
`;

const MainImage = styled.img<{ visible: number }>`
  object-fit: cover;
  width: 100%;
  opacity: ${({ visible }) => visible};
  transition: opacity 800ms ease 0s;
`;
interface Props {
  preSrc: string;
  src: string;
  mode?: "svg" | "blur";
}
export const Image: React.FC<Props> = ({ preSrc, src, mode = "svg" }) => {
  const [visible, setVisible] = useState(true);
  const handleOnLoad = () => {
    setVisible(false);
  };
  return (
    <FrameImage>
      <LazyImage
        src={preSrc}
        alt={"placeholder"}
        visible={visible ? 1 : 0}
        mode={mode}
      />
      <MainImage
        src={src}
        alt="jpg"
        visible={visible ? 0 : 1}
        onLoad={handleOnLoad}
      />
    </FrameImage>
  );
};

export default Image;
