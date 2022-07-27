import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리
`;

const RButton = styled.button`
background: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_right_52_52.svg") 50% 50% no-repeat;
width: 52px;
height: 52px;
cursor: pointer;
position: absolute;
top: 50%;
right: 10%;
padding: 0;
border: none;
transform: translate(-50%, -50%);
transition: all 0.5s ease 0s;
// opacity: 0;
// &:hover{
//   opacity: 1;
// }
opacity: ${props => props.status ? '1' : '0'};
  
`;

const LButton = styled.button`
background: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_left_52_52.svg") 50% 50% no-repeat;
cursor: pointer;
position: absolute;
top: 50%;
left: 10%;
z-index: 100;
width: 52px;
height: 52px;
border: none;
transform: translate(-50%, -50%);
transition: all 0.5s ease 0s;
opacity: ${props => props.status ? '1' : '0'};
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열
`;

const TOTAL_SLIDES = 2;

export default function Banner() {

  //const btnref = useRef(null);
  function handleFocus() {
    // btnref.current.style.opacity = 1;
    setIsBtnStatus(!isBtnStatus);
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBtnStatus, setIsBtnStatus] = useState(false);
  const slideRef = useRef(null);
  const nextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    };
    const prevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    };

    useEffect(() => {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);

  return (
    <Container onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
      <SliderContainer ref={slideRef}>
        <Slider img="https://img-cf.kurly.com/banner/main/pc/img/60b67224-684f-444e-8467-0dd3466bb6ee" />
        <Slider img="https://img-cf.kurly.com/banner/main/pc/img/be5f9ae9-3c68-4b01-a407-f4e2c407e95c" />
        <Slider img="https://img-cf.kurly.com/banner/main/pc/img/81c8240d-6ded-4edb-ac34-7e49bc490181" />
      </SliderContainer>
      <LButton status={isBtnStatus} onClick={prevSlide} ></LButton>
      <RButton status={isBtnStatus} onClick={nextSlide}></RButton>
    </Container>
  );
}
