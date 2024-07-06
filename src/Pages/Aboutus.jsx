import styled from "styled-components";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import TeamMember from "../Components/TeamMember";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 10.5rem;
  gap: 6rem;
  padding-top: 10rem;
`;
const Image = styled.img`
  height: 80vh;
  width: 40vw;
`;
const H2 = styled.h2`
  font-family: "Abril Fatface", serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
`;
const P = styled.p`
  color: rgb(108, 117, 125);
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  font-family: "Mukta Mahee", sans-serif;
  padding: 10px 0px;
`;
const Btn = styled.button`
  font-size: 15px;
  font-weight: 400;
  color: #000;
  line-height: 23px;
  padding: 10px 20px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #65c0ba;
  cursor: pointer;
  font-family: "Mukta Mahee", sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background-color: #65c0ba;
  }
`;
const TourDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 1rem;
  flex-direction: column;
`;
const BigHeading = styled.h2`
  font-family: "Abril Fatface", serif;
  font-weight: 300;
  font-size: 6rem;
  text-align: center;
  padding: 1rem 15rem;
`;

const Para = styled.p`
  color: rgb(108, 117, 125);
  font-size: 1.25rem;
  font-family: "Mukta Mahee", sans-serif;
`;

const Heading = styled.h2`
  font-family: "Abril Fatface", serif;
  font-weight: 300;
  font-size: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
`;
const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e9ecef;
  padding-top: 8rem;
`;

function Aboutus() {
  const images = [
    "slider-1.jpg",
    "slider-2.jpg",
    "slider-3.jpg",
    "slider-4.jpg",
    "slider-5.jpg",
    "slider-6.jpg",
  ];

  return (
    <>
      <Hero title="About Us" image="slider-2.jpg" />
      <Flex>
        <Image src="./hepta-colorlib/hero_1.jpg" alt="blah blah" />
        <div>
          <H2>Welcome Travel & Tours</H2>
          <P>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </P>
          <P>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </P>
          <Btn disabled>Learn More</Btn>
        </div>
      </Flex>
      <TourDiv>
        <BigHeading>Hotel Gallery</BigHeading>
        <Para>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Para>
        <Para>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </Para>
      </TourDiv>
      <Slider images={images} color="#E9ECEF" />
      <Temp>
        <Heading>Team</Heading>
        <Para>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Para>
        <Para>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </Para>
        <Grid style={{ gap: "1.5rem", paddingBottom: "10rem" }}>
          <TeamMember
            image="person_1.jpg"
            post="CEO co-founder"
            name="Jean Love"
          />
          <TeamMember
            image="person_1.jpg"
            post="CTO co-founder"
            name="Jean Love"
          />
          <TeamMember
            image="person_3.jpg"
            post="Marketer co-founder"
            name="Vince Richardson"
          />
          <TeamMember
            image="person_2.jpg"
            post="CEO co-founder"
            name="Jeff Stark"
          />
          <TeamMember
            image="person_3.jpg"
            post="Cto co-founder"
            name="Vince Richardson"
          />
          <TeamMember
            image="person_2.jpg"
            post="Marketer co-founder"
            name="Jeff Stark"
          />
        </Grid>
      </Temp>
    </>
  );
}

export default Aboutus;
