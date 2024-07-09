/* eslint-disable react/prop-types */
import styled from "styled-components";
import Nav from "./Nav";

const StyledHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 75vh;
`;
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-family: "Mukta Mahee", sans-serif;
  height: 65vh;
`;
const H2 = styled.h2`
  font-size: 3rem;
  font-family: "Abril Fatface", serif;
  font-weight: 400;
`;
const P = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  font-weight: 300;
  color: #fdffff;
  font-weight: 200;
`;
const Colorlib = styled.a`
  color: #b9bfc4;
  padding-bottom: 5px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid #b9bfc4;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;

function Hero({ title, image }) {
  const imagePath = `./hepta-colorlib/${image}`;
  return (
    <StyledHero imagePath={imagePath}>
      <Nav />
      <Main>
        <H2>{title}</H2>
        <P>
          A free template by <Colorlib href=""> Colorlib</Colorlib>. Download
          and share!
        </P>
      </Main>
    </StyledHero>
  );
}

export default Hero;
