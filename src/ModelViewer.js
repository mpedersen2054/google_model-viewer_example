import React from 'react';
import styled from 'styled-components';
import cylinder from './Cylinder.glb'

const Wrapper = styled.div`
  border: 4px solid black;
  width: 40vw;
  height: 60vh;

  > * {
    width: 100%;
    height: 100%;
  }
`;

function ModelViewer() {
  return (
    <Wrapper>
      <model-viewer
        alt=""
        src={cylinder}
        poster=""
        // shadow-intensity="1"
        camera-controls touch-action="pan-y"></model-viewer>
    </Wrapper>
  );
}

export default ModelViewer;
