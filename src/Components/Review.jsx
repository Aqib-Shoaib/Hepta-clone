/* eslint-disable react/prop-types */

import styled from "styled-components";

const Image = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
`;
const StyledReview = styled.div`
  width: 27vw;
  font-style: italic;
`;
const Para = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 200;
`;

const Author = styled.p`
  color: rgb(108, 117, 125);
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
`;

function Review({ image, author }) {
  return (
    <StyledReview>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <Para>
        “Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.”
      </Para>
      <Author>— {author}</Author>
    </StyledReview>
  );
}

export default Review;
