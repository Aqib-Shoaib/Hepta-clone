import styled from "styled-components";
import HeroAbout from "../Components/Hero_n_About";
import Slider from "../Components/Slider";
import ExploreItem from "../Components/ExploreItem";
import BlogPost from "../Components/BlogPost";
import Review from "../Components/Review";
import Destination from "../Components/Destination";

const Heading = styled.h2`
  font-family: "Abril Fatface", serif;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
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
  text-align: center;
`;
const Explore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fafafa;
  padding: 10rem 7rem;
`;
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
const TourDiv = styled.div`
  display: flex;
  padding: 10rem 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Blogs = styled.div`
  background-color: #65c0ba;
  padding: 4rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const Reviews = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
const Destinations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 7rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

function Homepage() {
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
      <HeroAbout />

      <Explore>
        <Heading>Experience Once In Your Life Time</Heading>
        <Para>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Para>
        <Para>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </Para>

        <Grid>
          <ExploreItem title="Good Foods" imageName="001-breakfast.svg" />
          <ExploreItem
            title="Travel Anywhere"
            imageName="002-planet-earth.svg"
          />
          <ExploreItem title="Airplane" imageName="003-airplane.svg" />
          <ExploreItem title="Beach Resort" imageName="004-beach.svg" />
          <ExploreItem
            title="Mountain Climbing"
            imageName="005-mountains.svg"
          />
          <ExploreItem
            title="Hot Air Balloon"
            imageName="006-hot-air-balloon.svg"
          />
        </Grid>
      </Explore>

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

      <Slider images={images} color="#65c0ba" />

      <TourDiv style={{ backgroundColor: "#65c0ba", paddingBottom: "0" }}>
        <BigHeading>Recent Blog Post</BigHeading>
        <Para style={{ color: "#fff" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Para>
        <Para style={{ color: "#fff" }}>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </Para>
      </TourDiv>

      <Blogs>
        <BlogPost image="./img_1.jpg" />
        <BlogPost image="./img_2.jpg" />
        <BlogPost image="./img_3.jpg" />
      </Blogs>

      <TourDiv style={{ backgroundColor: "#FAFAFA" }}>
        <BigHeading>Happy Customers</BigHeading>
        <Reviews>
          <Review image="person_1.jpg" author="Clare Gupta" />
          <Review image="person_2.jpg" author="Rogie Slater" />
          <Review image="person_3.jpg" author="John Doe" />
        </Reviews>
      </TourDiv>

      <TourDiv style={{ paddingBottom: "0" }}>
        <Heading>Top Destination</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet?
        </Para>
        <Para>
          Enim facilis laborum voluptate id porro, culpa maiores quis,
          blanditiis laboriosam alias. Sed.
        </Para>
      </TourDiv>
      <Destinations>
        <Destination
          image="img_1.jpg"
          title="Foods & Wines"
          rating={3.5}
          reviews="3239"
        />
        <Destination
          image="img_2.jpg"
          title="Resort & Spa"
          rating="3.5"
          reviews="4921"
        />
        <Destination
          image="img_3.jpg"
          title="Hotel Rooms"
          rating="4"
          reviews="2112"
        />
        <Destination
          image="img_5.jpg"
          title="Mountain Climbing"
          rating="4"
          reviews="6421"
        />
      </Destinations>
    </>
  );
}

export default Homepage;
