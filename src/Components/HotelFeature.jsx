import styled from "styled-components";

/* eslint-disable react/prop-types */
const Image = styled.img`
  height: 17rem;
  width: 26rem;
`;
const H3 = styled.h3`
  color: #000;
  font-family: "Abril Fatface", serif;
  font-size: 26px;
  cursor: pointer;
  line-height: 31px;
  font-weight: 500;
  &:hover {
    color: rgb(101, 192, 186);
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 10px 0px;
  gap: 1rem;
  width: 26rem;
`;
function HotelFeature({ image }) {
  return (
    <Box>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <H3>Five Reasons to stay at villa restuarant</H3>
    </Box>
  );
}

export default HotelFeature;
