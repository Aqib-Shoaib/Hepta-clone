/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const Icon = styled.span`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 90vw;
  height: auto;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1024px) {
    width: 75vw;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 10px 0;

  @media (min-width: 768px) {
    bottom: 4rem;
  }

  @media (min-width: 1024px) {
    bottom: 5rem;
  }

  @media (min-width: 1200px) {
    bottom: 7rem;
  }
`;

const Dot = styled.span`
  font-size: 1rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const SkewedBackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
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

    @media (max-width: 600px) {
      height: 30%;
    }

    @media (min-width: 600px) and (max-width: 1200px) {
      height: 35%;
    }

    @media (min-width: 1200px) {
      height: 45%;
    }
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
