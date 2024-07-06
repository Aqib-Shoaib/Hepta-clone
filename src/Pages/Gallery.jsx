import styled from "styled-components";
import Hero from "../Components/Hero";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 8rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Imgbig = styled.img`
  width: 100%;
  height: auto;
  grid-column: span 2;
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
