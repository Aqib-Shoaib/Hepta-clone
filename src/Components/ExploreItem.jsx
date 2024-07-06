/* eslint-disable react/prop-types */
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 1rem;
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
const Image = styled.img`
  width: 60px;
  height: 60px;
`;

function ExploreItem({ title, imageName }) {
  return (
    <Div>
      <Image src={`./hepta-colorlib/${imageName}`} alt={`${imageName}`} />
      <Heading>{title}</Heading>
      <Para>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </Para>
    </Div>
  );
}

export default ExploreItem;
