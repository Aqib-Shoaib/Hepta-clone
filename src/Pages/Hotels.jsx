import styled from "styled-components";
import ExploreItem from "../Components/ExploreItem";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import HotelFeature from "../Components/HotelFeature";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;
  padding: 3rem 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 3rem 10rem;
  }
`;
const Image = styled.img`
  height: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
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
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
    font-weight: 500;
    padding: 1rem 7rem;
  }
  @media (max-width: 570px) {
    font-size: 30px;
    line-height: 30px;
    padding: 1rem 3rem;
  }
`;
const Para = styled.p`
  color: rgb(108, 117, 125);
  font-size: 1.25rem;
  font-family: "Mukta Mahee", sans-serif;
`;

function Hotels() {
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
      <Hero title="Our Hotel" image="slider-4.jpg" />
      <Grid>
        <ExploreItem title="Good Foods" imageName="001-breakfast.svg" />
        <ExploreItem title="Travel Anywhere" imageName="002-planet-earth.svg" />
        <ExploreItem title="Airplane" imageName="003-airplane.svg" />
        <ExploreItem title="Beach Resort" imageName="004-beach.svg" />
        <ExploreItem title="Mountain Climbing" imageName="005-mountains.svg" />
        <ExploreItem
          title="Hot Air Balloon"
          imageName="006-hot-air-balloon.svg"
        />
      </Grid>
      <Flex>
        <Image src="./hepta-colorlib/hero_1.jpg" alt="blah blah" />
        <div>
          <H2>Family Room</H2>
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
      <Flex>
        <div>
          <H2>Presidential Room</H2>
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
        <Image src="./hepta-colorlib/slider-2.jpg" alt="blah blah" />
      </Flex>
      <TourDiv>
        <BigHeading>International Tour Management.</BigHeading>
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
      <TourDiv style={{ backgroundColor: "#e9ecef", paddingBottom: "0" }}>
        <BigHeading>More Hotel Features</BigHeading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet?
        </Para>
        <Para>
          Enim facilis laborum voluptate id porro, culpa maiores quis,
          blanditiis laboriosam alias. Sed.
        </Para>
      </TourDiv>
      <Flex
        style={{
          backgroundColor: "#e9ecef",
          gap: "3rem",
          paddingBottom: "10rem",
          paddingTop: "4rem",
        }}
      >
        <HotelFeature image="slider-6.jpg" />
        <HotelFeature image="slider-5.jpg" />
        <HotelFeature image="img_3.jpg" />
      </Flex>
    </>
  );
}

export default Hotels;
