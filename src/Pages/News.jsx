import styled from "styled-components";
import Hero from "../Components/Hero";
import NewsPost from "../Components/Newspost";
import Smallpost from "../Components/Smallpost";
import { FaSearch } from "react-icons/fa";

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 10rem 5rem;
  gap: 5rem;
  background-color: #fafafa;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fff;
  width: 310px;
`;

const SearchInput = styled.input`
  width: 250px;
  padding: 10px 20px 10px 40px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #a3a3a3;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 20px;
  color: #a3a3a3; /* Icon color */
  pointer-events: none;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const H3 = styled.h3`
  color: #000;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-family: "Mukta Mahee", sans-serif;
  padding: 1.5rem 1rem;
`;
const Category = styled.span`
  color: rgb(63, 154, 148);
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  font-family: "Mukta Mahee", sans-serif;
`;
const Number = styled.span`
  color: rgb(108, 117, 125);
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  font-family: "Mukta Mahee", sans-serif;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-bottom: 1px solid #cccccc;
  margin: 0.5rem 1rem;
  padding-bottom: 1rem;
`;

function News() {
  return (
    <div>
      <Hero title="Blog" image="hero_3.jpg.webp" />
      <MainGrid>
        <PostContainer>
          <NewsPost image="img_1.jpg" />
          <NewsPost image="img_2.jpg" />
          <NewsPost image="img_3.jpg" />
          <NewsPost image="img_5.jpg" />
          <NewsPost image="img_5.jpg" />
          <NewsPost image="img_1.jpg" />
        </PostContainer>
        <div
          style={{
            margin: "2rem",
          }}
        >
          <SearchContainer>
            <InputWrapper>
              <SearchIcon />
              <SearchInput type="text" placeholder="Search..." />
            </InputWrapper>
          </SearchContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              margin: "1rem 0rem",
              width: "310px",
            }}
          >
            <H3>Popular Posts </H3>
            <Smallpost image="img_1.jpg" />
            <Smallpost image="img_4.jpg" />
            <Smallpost image="img_2.jpg" />
            <Smallpost image="img_4.jpg" />
            <Smallpost image="img_3.jpg" />
            <Smallpost image="img_2.jpg" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              margin: "1rem 0rem",
              width: "310px",
            }}
          >
            <H3>Categories</H3>
            <Div>
              <Category>Events</Category>
              <Number>(12)</Number>
            </Div>
            <Div>
              <Category>Resto Bars</Category>
              <Number>(4)</Number>
            </Div>
            <Div>
              <Category>Celebrations</Category>
              <Number>(23)</Number>
            </Div>
            <Div>
              <Category>Promos</Category>
              <Number>(8)</Number>
            </Div>
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default News;
