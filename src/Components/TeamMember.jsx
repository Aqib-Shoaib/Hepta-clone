/* eslint-disable react/prop-types */

import styled from "styled-components";

const Image = styled.img`
  width: 25rem;
  height: auto;
`;

const Post = styled.span`
  font-family: "Mukta Mahee", sans-serif;
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  color: rgb(206, 212, 218);
  padding: 5px 20px;
`;
const Name = styled.span`
  font-family: "Abril Fatface", serif;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  font-size: 26px;
  line-height: 31px;
  padding: 0px 20px;

  &:hover {
    color: rgb(101, 192, 186);
  }
`;
const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

function TeamMember({ image, post, name }) {
  return (
    <Styled>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <Post>{post}</Post>
      <Name>{name}</Name>
    </Styled>
  );
}

export default TeamMember;
