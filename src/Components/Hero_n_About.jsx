import styled from "styled-components";
import Nav from "./Nav";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const StyledHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("./hepta-colorlib/hero_1.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  color: #fff;
  font-family: "Mukta Mahee", sans-serif;
`;
const H2 = styled.h2`
  font-size: 6rem;
  font-family: "Abril Fatface", serif;
  font-weight: 400;
`;
const P = styled.p`
  font-size: 2.5rem;
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
const Button = styled.button`
  background: transparent;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 2rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

const ScrollDiv = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const StyledAbout = styled.section`
  height: 150vh;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid gray;
  padding: 10rem;
  gap: 2rem;
`;
const WelcomeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-family: "Mukta Mahee", sans-serif;
`;
const WelcomeHeading = styled.h2`
  font-family: "Abril Fatface", serif;
  font-size: 2rem;
  font-weight: 300;
  padding: 1rem 0;
`;
const WelcomePara = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: rgb(108, 117, 125);
  padding: 1rem 0rem;
`;

const VideoLink = styled.span`
  color: rgb(63, 154, 148);
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const PlayIcon = styled.span`
  border: 2px solid rgb(63, 154, 148);
  padding: 10px;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #000;
    border-color: #000;
  }
`;

const VideoDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled(IoClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`;

function HeroAbout() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <StyledHero>
        <Nav />
        <Main>
          <H2>Travels & tours</H2>
          <P>
            A free template by <Colorlib href="#">Colorlib</Colorlib>. Download
            and share!
          </P>
          <Button>Visit Colorlib</Button>
        </Main>
        <ScrollDiv>
          <TiArrowSortedDown style={{ fontSize: "1.5rem" }} />
          <span>Scroll Down</span>
        </ScrollDiv>
      </StyledHero>
      <StyledAbout>
        <img src="./hepta-colorlib/img_1_long.jpg" alt="back of a young man" />
        <WelcomeDiv>
          <WelcomeHeading>Welcome To Our Website</WelcomeHeading>
          <WelcomePara>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </WelcomePara>
          <WelcomePara>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </WelcomePara>
          <VideoLink onClick={() => setShowVideo(true)}>
            <PlayIcon>
              <FaPlay />{" "}
            </PlayIcon>
            WATCH THE VIDEO
          </VideoLink>
        </WelcomeDiv>
        {showVideo && (
          <VideoDiv>
            <CloseButton onClick={() => setShowVideo(false)} />
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/93951774?h=7b0340232e"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </VideoDiv>
        )}
      </StyledAbout>
    </>
  );
}

export default HeroAbout;
