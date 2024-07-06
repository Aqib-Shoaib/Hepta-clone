/* eslint-disable react/prop-types */

import styled from "styled-components";

const Heading = styled.h2`
  font-family: "Abril Fatface", serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  cursor: pointer;
  &:hover {
    color: rgb(101, 192, 186);
  }
`;
const Image = styled.img`
  width: 30rem;
  height: 18rem;
`;
const StyledBlogDiv = styled.div`
  padding: 2rem;
  background-color: #fff;
  width: 30rem;
`;
const Blog = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 1rem;
`;
const Date = styled.p`
  color: rgb(206, 212, 218);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 200;
  line-height: 32px;
  margin-left: 0;
`;

function NewsPost({ image }) {
  return (
    <Blog>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <StyledBlogDiv>
        <Date>FEBRUARY 26, 2018</Date>
        <Heading>Fre Template By Colorlib</Heading>
      </StyledBlogDiv>
    </Blog>
  );
}

export default NewsPost;
