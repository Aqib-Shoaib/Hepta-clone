import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 80px 20px 20px;
  color: #fff;
  font-family: "Mukta Mahee", sans-serif;

  @media (min-width: 768px) {
    padding: 80px 40px 20px;
  }

  @media (min-width: 1200px) {
    padding: 80px 60px 20px;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FooterColumn = styled.div`
  flex: 1 1 100%;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 768px) {
    flex: 1 1 45%;
    text-align: left;
  }

  @media (min-width: 1024px) {
    flex: 1 1 22%;
    margin-bottom: 0;
  }
`;

const FooterTitle = styled.h3`
  font-family: "Abril Fatface", serif;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
  font-weight: 500;
  color: #fff;
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 200;
  line-height: 32px;
  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.p`
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 32px;
  font-weight: 200;
  font-size: 18px;
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const FooterInput = styled.input`
  padding: 10px;
  border: none;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
  font-size: 14px;
  line-height: 22px;
  color: #fff;

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;

const FooterButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: white;
  font-size: 14px;
  line-height: 22px;
`;

const FooterSocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-weight: 200;
  line-height: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 0 1rem;
  padding: 15px 0;

  @media (min-width: 768px) {
    margin: 0 3rem;
  }

  @media (min-width: 1200px) {
    margin: 0 5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterTitle>Quick Link</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Help</FooterLink>
          <FooterLink href="#">Rooms</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="#">Our Location</FooterLink>
          <FooterLink href="#">The Hosts</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Restaurant</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>
            <p style={{ color: "white", fontStyle: "italic" }}> Address:</p>
            98 West 21th Street, Suite 721 New York NY 10016 <br />
            <p style={{ color: "white", fontStyle: "italic" }}> Phone: </p>
            (+1) 435 3533 <br />
            <p style={{ color: "white", fontStyle: "italic" }}> Email:</p>
            info@yourdomain.com
          </FooterText>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Subscribe</FooterTitle>
          <FooterText>Sign up for our newsletter</FooterText>
          <FooterForm>
            <FooterInput type="email" placeholder="Your email..." />
            <FooterButton type="submit">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </FooterButton>
          </FooterForm>
        </FooterColumn>
      </FooterWrapper>
      <FooterBottom>
        Copyright © 2024 All rights reserved | This template is made with
        <i className="fa fa-heart" aria-hidden="true"></i> by Colorlib
      </FooterBottom>
      <FooterSocialLinks>
        <SocialLink href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-linkedin-in"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-youtube"></i>
        </SocialLink>
      </FooterSocialLinks>
    </FooterContainer>
  );
};

export default Footer;
