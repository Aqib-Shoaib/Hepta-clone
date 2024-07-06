/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const Icon = styled.span`
  font-size: 5rem;
  font-weight: 500;
  cursor: pointer;
`;

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 75vw;
  height: auto;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const Dot = styled.span`
  font-size: 1.5rem;
  color: #fff; // White color for the dots
`;

const SkewedBackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0; /* Default background color of the div */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background-color: ${(props) => props.bgColor || "#3498db"};
    transform: skewY(${(props) => props.skew || "-5"}deg);
    transform-origin: bottom right;
  }
`;

function Slider({ images, color }) {
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageNumber((no) => (no === images.length - 1 ? 0 : no + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [imageNumber, images]);

  function handleIncrement() {
    setImageNumber((no) => (no === images.length - 1 ? 0 : no + 1));
  }

  function handleDecrement() {
    setImageNumber((no) => (no === 0 ? images.length - 1 : no - 1));
  }

  return (
    <SkewedBackgroundDiv bgColor={color}>
      <SliderDiv>
        <Icon onClick={handleDecrement}>
          <MdKeyboardArrowLeft />
        </Icon>
        <ImageContainer>
          <Image
            src={`./hepta-colorlib/${images[imageNumber]}`}
            alt="random images showing via slider"
          />
          <Dots>
            {images.map((_, i) => (
              <Dot key={i}>{i === imageNumber ? <GoDot /> : <GoDotFill />}</Dot>
            ))}
          </Dots>
        </ImageContainer>
        <Icon onClick={handleIncrement}>
          <MdKeyboardArrowRight />
        </Icon>
      </SliderDiv>
    </SkewedBackgroundDiv>
  );
}

export default Slider;
