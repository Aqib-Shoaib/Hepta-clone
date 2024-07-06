import styled from "styled-components";
import StarRating from "./StarRating";

/* eslint-disable react/prop-types */

const Image = styled.img`
  width: 22rem;
  height: 15rem;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
`;
const Reviews = styled.span`
  color: rgb(204, 204, 204);
  font-style: italic;
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
`;

function Destination({ image, title, rating, reviews }) {
  return (
    <StyledComp>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <h2>{title}</h2>
      <Rating>
        <span>
          <StarRating color="#65c0ba" size="18px" defualtRating={rating} />
        </span>
        <Reviews>{reviews} reviews</Reviews>
      </Rating>
    </StyledComp>
  );
}

export default Destination;
