import styled from 'styled-components';
import TripleImage from './components/TripleImage';
import TripleContents from './components/TripleContents';

function App() {
  return (
    <Wrap>
      <TripleImage></TripleImage>
      <TripleContents></TripleContents>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Noto Sans KR;
  font-style:normal;
`;