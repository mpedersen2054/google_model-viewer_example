import styled from 'styled-components';

import ModelViewer from './ModelViewer'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  > * {
    margin: 16px;
  }
`;

const Gray = styled.span`
  background-color: #999;
  padding: 0 4px;
  border-radius: 4px;
`;

function App() {
  return (
    <Wrapper>
      <h1>Google <Gray>model-viewer</Gray> example</h1>
      <div>
        This demo uses <a rel="noreferrer" target="_blank" href="https://modelviewer.dev/">Google model-viewer</a> to render a ".glb" file.
      </div>
      <div>File: <a rel="noreferrer" target="_blank" href="https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/2CylinderEngine/glTF-Binary/2CylinderEngine.glb">Cylinder.glb</a></div>
      <div>Code: <a rel="noreferrer" target="_blank" href="https://github.com/mpedersen2054/google_model-viewer_example">https://github.com/mpedersen2054/google_model-viewer_example</a></div>
      <ModelViewer />
    </Wrapper>
  );
}

export default App;
