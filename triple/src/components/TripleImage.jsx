import styled from 'styled-components';
import Image from '../assets/Triple/TripleImage/triple@2x.png';
function TripleImage(){
  return (
    <Wrap>
      <ImageComp src={Image}>
      </ImageComp>
      <TextWrap>
        2019년 2월 기준
      </TextWrap>
    </Wrap>
  )
}
export default TripleImage;
const Wrap = styled.div`
  width:50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: firstRender 0.7s ease-in forwards;
  opacity: 0;
  @keyframes firstRender{
    from{
      transform: translateY(20px);
      opacity: 0;
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
const ImageComp = styled.img`
  width: 400px;
  height: 338px;
  padding-top: 80px;
  object-fit: contain;
`;
const TextWrap = styled.p`
  position: absolute;
  bottom: 10%;
  color:gray;
`