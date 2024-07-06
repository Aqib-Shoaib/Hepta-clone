import styled from "styled-components";

/* eslint-disable react/prop-types */
const Image = styled.img`
  width: 130px;
  height: 80px;
`;
const Container = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  background: white;
  width: 25rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Date = styled.span`
  color: rgb(173, 181, 189);
  font-weight: 200;
  font-size: 13px;
  line-height: 23px;
  font-family: "Mukta Mahee", sans-serif;
`;
const Small = styled.span`
  color: #000;
  font-weight: 500;
  font-family: "Abril Fatface", serif;
  font-size: 16px;
  line-height: 19px;
`;
function Smallpost({ image }) {
  return (
    <Container>
      <Image src={`./hepta-colorlib/${image}`} alt={`${image}`} />
      <Box>
        <Date>FEBRUARY 27,2018</Date>
        <Small>Free Template By Colorlib</Small>
      </Box>
    </Container>
  );
}

export default Smallpost;
