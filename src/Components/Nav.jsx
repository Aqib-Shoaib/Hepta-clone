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
  padding: 3rem 1rem;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-family: "Abril Fatface", serif;
  letter-spacing: 0.4px;
  font-weight: 300;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const StyledNavigation = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
`;

const Li = styled.li`
  list-style: none;
`;

const iconStyles = {
  fontSize: "4rem",
  fontWeight: "300",
  color: "white",
  cursor: "pointer",
};
const iconStyles2 = {
  fontSize: "4rem",
  fontWeight: "300",
  color: "black",
  position: "absolute",
  top: "3rem",
  right: "1rem",
  cursor: "pointer",
};

const StyledNavLink = styled(NavLink)`
  font-size: 4rem;
  font-family: "Abril Fatface", serif;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #65c0ba;
  }
  &.active {
    color: #65c0ba;
  }
`;

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return !navOpen ? (
    <StyledNav>
      <Heading>Hepta</Heading>
      <Button type="button" onClick={() => setNavOpen(true)}>
        <FaBars style={iconStyles} />
      </Button>
    </StyledNav>
  ) : (
    <StyledNavigation>
      <Button type="button" onClick={() => setNavOpen(false)}>
        <IoClose style={iconStyles2} />
      </Button>
      <ul>
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
      </ul>
    </StyledNavigation>
  );
}

export default Nav;
