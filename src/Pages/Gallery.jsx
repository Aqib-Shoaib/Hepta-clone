import styled from "styled-components";
import Hero from "../Components/Hero";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1.5rem;
  place-items: center;
  padding: 3rem 1rem;
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);

    padding: 8rem;
  }
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const Imgbig = styled.img`
  width: 80%;
  height: auto;
  @media (min-width: 1024px) {
    width: 100%;
    grid-column: span 2;
  }
`;

function Gallery() {
  return (
    <>
      <Hero title="Gallery" image="slider-2.jpg" />
      <Grid>
        <Image src="./hepta-colorlib/img_1.jpg" alt="image 1" />
        <Image src="./hepta-colorlib/img_2.jpg" alt="image 2" />
        <Image src="./hepta-colorlib/img_3.jpg" alt="image 3" />
        <Image src="./hepta-colorlib/img_4.jpg" alt="image 4" />
        <Image src="./hepta-colorlib/img_5.jpg" alt="image 5" />
        <Image src="./hepta-colorlib/img_1.jpg" alt="image 6" />
        <Image src="./hepta-colorlib/img_2.jpg" alt="image 7" />
        <Image src="./hepta-colorlib/img_3.jpg" alt="image 8" />
        <Imgbig src="./hepta-colorlib/img_4.jpg" alt="image 9" />
        <Imgbig src="./hepta-colorlib/img_5.jpg" alt="image 10" />
        <Image src="./hepta-colorlib/img_1.jpg" alt="image 11" />
        <Image src="./hepta-colorlib/img_2.jpg" alt="image 12" />
        <Image src="./hepta-colorlib/img_3.jpg" alt="image 13" />
        <Image src="./hepta-colorlib/img_4.jpg" alt="image 14" />
      </Grid>
    </>
  );
}

export default Gallery;
