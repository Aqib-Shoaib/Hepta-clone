import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const StyledNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: "Abril Fatface", serif;
  letter-spacing: 0.4px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const StyledNavigation = styled.nav`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  list-style: none;
`;

const Li = styled.li`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const iconStyles2 = {
  color: "black",
  position: "absolute",
  top: "1.5rem",
  right: "1rem",
};

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  font-family: "Abril Fatface", serif;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #65c0ba;
  }
  &.active {
    color: #65c0ba;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <Heading>Hepta</Heading>
        <Button type="button" onClick={() => setNavOpen(true)}>
          <FaBars />
        </Button>
      </StyledNav>
      {navOpen && (
        <StyledNavigation>
          <Button type="button" onClick={() => setNavOpen(false)}>
            <IoClose style={iconStyles2} />
          </Button>
          <Ul>
            <Li>
              <StyledNavLink to="/home">Home</StyledNavLink>
            </Li>
            <Li>
              <StyledNavLink to="/hotels">Hotels</StyledNavLink>
            </Li>
            <Li>
              <StyledNavLink to="/about">About Us</StyledNavLink>
            </Li>
            <Li>
              <StyledNavLink to="/gallery">Gallery</StyledNavLink>
            </Li>
            <Li>
              <StyledNavLink to="/news">News</StyledNavLink>
            </Li>
            <Li>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </Li>
          </Ul>
        </StyledNavigation>
      )}
    </>
  );
}

export default Nav;
