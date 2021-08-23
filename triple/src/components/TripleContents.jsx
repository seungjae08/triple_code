import styled from 'styled-components';
import PlayStore from '../assets/Triple/TripleContents/play-store@2x.png';
import AppStore from '../assets/Triple/TripleContents/app-store@2x.png';
import { useEffect, useState } from 'react';

function TripleContents (){
  const [user,setUser] = useState(0);
  const [review,setReview] = useState(0);
  const [save,setSave] = useState(0);
  const userMax = 350;
  const reviewMax = 21;
  const saveMax = 650;
  // 800ms 동안 Interval 진행
  // User IncrementTime과 SaveIncrementTime은 너무 많은 setInterval이 진행됩니다.
  // 그래서 1씩 더하는 방법을 제외하고 2씩더하는 방법을 선택했습니다.
  // 그 뒤 4를 뺀 수부터 천천히 증가하도록 바꿨습니다.
  const userIncrementTime = 800/350*2;
  const reviewIncrementTime = 800/21*2;
  const saveIncrementTime = 800/650*2;
  
  const intervalFunction =(max,incrementTime,setState)=>{
    return ()=>{
      let start = 0;
      if(start===max) return;
      let timer = setInterval(()=>{
        start += 2;
        setState(start);
        if(start > max-10){
          let slowTimer = setInterval(()=>{
            start += 1;
            setState(start);
            if(start === max) clearInterval(slowTimer)
          },100)
          clearInterval(timer);
        } 
      },incrementTime);
    }
  }

  useEffect(intervalFunction(userMax,userIncrementTime,setUser),[userMax,userIncrementTime]);
  useEffect(intervalFunction(reviewMax,reviewIncrementTime,setReview),[userMax,userIncrementTime]);
  useEffect(intervalFunction(saveMax,saveIncrementTime,setSave),[userMax,userIncrementTime]);

  // useEffect(()=>{
  //   let start = 0;
  //   if(start===reviewMax) return;
  //   let timer = setInterval(()=>{
  //     start += 1;
  //     setReview(start);
  //     if(start === reviewMax-2){
  //       let slowTimer = setInterval(()=>{
  //         start +=1;
  //         setReview(start);
  //         if(start === reviewMax) clearInterval(slowTimer)
  //       },100)
  //       clearInterval(timer);
  //     }
  //   },reviewIncrementTime);
  // },[reviewMax,reviewIncrementTime])

  // useEffect(()=>{
  //   let start = 0;
  //   if(start===saveMax) return;
  //   let timer = setInterval(()=>{
  //     start +=2;
  //     setSave(start);
  //     if(start === saveMax-4){
  //       let slowTimer = setInterval(()=>{
  //         start +=1;
  //         setSave(start);
  //         if(start === saveMax) clearInterval(slowTimer)
  //       },100)
  //       clearInterval(timer);
  //     } 
  //   },saveIncrementTime)
  // },[saveMax,saveIncrementTime])

  return (
    <Wrap>
      <ContentsWrap>
        <p><span>{user}만 명</span>의 사용자</p>
        <p><span>{review}만 개</span>의 리뷰</p>
        <p><span>{save}만 개</span>의 저장</p>
      </ContentsWrap>
      <AwardWrap>
        <AwardEle>
          <img src={PlayStore} alt='Play stroe'></img>
          <p>
            2018 구글 플레이스토어<br />
            올해의 앱 최우수상 수상
          </p>
        </AwardEle>
        <AwardEle>
          <img src={AppStore} alt='App store'></img>
          <p>
            2018 애플 앱스토어<br />
            오늘의 여행앱 선정
          </p>
        </AwardEle>
        
      </AwardWrap>
    </Wrap>
  )
}

export default TripleContents;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentsWrap = styled.div`
  p{
    height: 36px;
    margin: 0px;
    margin-bottom: 36px;
    font-weight: 400;
    font-size: 36px;
    letter-spacing: -1px;
    span{
      font-weight: 700;
    }
  }
  opacity: 0;
  animation: firstRender 700ms ease-in forwards;
  animation-delay: 100ms;
  @keyframes firstRender{
    from{
      transform: translateY(10px);
      opacity: 0;
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
const AwardWrap = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  opacity: 0;
  animation: firstRender 700ms ease-in forwards;
  animation-delay: 200ms;
  @keyframes firstRender{
    from{
      transform: translateY(10px);
      opacity: 0;
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
const AwardEle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 40px;
  img{
    object-fit: cover;
    width: 50px;
    height: 50px;
  }
  p{
    margin-left: 10px;
    line-height:25px;
  }
`