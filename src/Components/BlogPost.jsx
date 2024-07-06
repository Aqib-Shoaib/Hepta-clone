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
  height: 20rem;
`;
const StyledBlogDiv = styled.div`
  padding: 2rem;
  background-color: #fff;
  width: 30rem;
`;
const Blog = styled.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled.p`
  color: rgb(206, 212, 218);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 200;
  line-height: 32px;
  margin: 1rem;
  margin-left: 0;
`;
const P = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-weight: 200;
  color: rgb(108, 117, 125);
`;

function BlogPost({ image }) {
  return (
    <Blog>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <StyledBlogDiv>
        <Date>FEBRUARY 26, 2018</Date>
        <Heading>45 Best Places To Unwind</Heading>
        <P>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </P>
      </StyledBlogDiv>
    </Blog>
  );
}

export default BlogPost;
