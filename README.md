# triple_code
## 실행 방법

cd triple
yarn start

## 사용 기술 스택
- React
- styled-components

## 설계
- App.js

App.js에서 모든 jsx를 불러와 Rendering하는 방법을 선택했습니다.
flex를 사용해서 가로의 중앙정렬을 사용했습니다.
컴포넌트는 Image를 표현하는 부분과 Contents들이 들어가는 부분 두 부분으로 나눴습니다.
justify-content기능을 사용해 각각 컴포넌트들이 사이드에 배치 될 수 있도록 나눴습니다.

- components/TripleImage.tsx

Triple 이미지 하단에 2019년 2월 기준이라는 글자를 입혀야 했고
애니메이션을 만들어야해서 컴포넌트를 따로 나눴습니다.
애니메이션은 keyframes를 이용해 animation을 나타냈습니다.
이미지의 크기는 기존 홈페이지의 이미지 크기를 참고해서 나타냈습니다. (1600 × 1352 => 400 x 338)

- components/Triple

오른쪽 Contents를 나타내기 위해서 만든 컴포넌트입니다.
위 숫자를 올리는 부분과 수상을 한 부분을 따로 나타내기 위해 Div로 나눴습니다.
해당 부분에서 100ms의 차이로 애니메이션을 입히기 위함도 있었습니다.
숫자를 올리기 위해 React hooks를 사용했습니다.
setInterval을 하기 위한 Function을 하나 만들어 줬고 이를 3개의 useEffect에 적용시켰습니다.

## 디자인

styled components를 사용해 Css를 적용시켰습니다.
Animation은 css animation을 사용해 만들었습니다.
Count가 올라가는 부분은 기존은 800ms에 해당 숫자(ex/ 유저=> 650)를 나눠서 ms를 나타냈습니다.
마지막 4개의 숫자가 올라갈때는 카운트가 급격하게 느려지는 Animation을 추가하기 위해서 setInterval을
100ms로 늘리는 setInterval을 추가시키고 기존 interval을 clear해줬습니다.

기존 홈페이지에서 favicon을 가져와 사용했습니다. HTML Title Tag를 Triple로 바꿨습니다.

기회를 주셔서 감사합니다

