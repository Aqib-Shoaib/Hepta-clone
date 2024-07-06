import styled from "styled-components";
import Hero from "../Components/Hero";
import Review from "../Components/Review";
import ContactForm from "../Components/ContactForm";

const Reviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 4rem;
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

function Contact() {
  return (
    <div>
      <Hero title="Contact Us" image="slider-3.jpg" />
      <ContactForm />
      <TourDiv style={{ backgroundColor: "#FAFAFA" }}>
        <BigHeading>Happy Customers</BigHeading>
        <Reviews>
          <Review image="person_1.jpg" author="Clare Gupta" />
          <Review image="person_2.jpg" author="Rogie Slater" />
          <Review image="person_3.jpg" author="John Doe" />
        </Reviews>
      </TourDiv>
    </div>
  );
}

export default Contact;
