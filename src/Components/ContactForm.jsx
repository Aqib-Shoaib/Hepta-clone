import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background: #f9f9f9;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  gap: 2.5rem;
`;

const Form = styled.form`
  width: 60%;
  background: #fff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: rgb(108, 117, 125);
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 0.5rem;
  font-family: "Mukta Mahee", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: 2px solid rgba(73, 80, 87, 0.2);
  font-family: "Mukta Mahee", sans-serif;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(73, 80, 87);
`;

const TextArea = styled.textarea`
  font-family: "Mukta Mahee", sans-serif;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(73, 80, 87);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: 1px solid #65c0ba;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(73, 80, 87);

  &:hover {
    background: #65c0ba;
    color: #fff;
  }
`;

const Info = styled.div`
  width: 40%;
  padding: 2rem;
  color: #333;
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
`;

const InfoLabel = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: rgb(101, 192, 186);
  margin: 0;
  font-family: "Mukta Mahee", sans-serif;
`;

const Address = styled.p`
  font-size: 30px;
  font-weight: 200;
  line-height: 54px;
  color: #000;
  margin: 0;
  font-family: "Abril Fatface", serif;
`;

const ContactForm = () => {
  return (
    <Container>
      <FormWrapper>
        <Form>
          <InputGroup>
            <FormControl>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" />
            </FormControl>
            <FormControl>
              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" />
            </FormControl>
          </InputGroup>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </FormControl>
          <FormControl>
            <Label htmlFor="message" style={{ paddingTop: "1rem" }}>
              Write Message
            </Label>
            <TextArea id="message" rows="5"></TextArea>
          </FormControl>
          <Button type="submit" disabled>
            Send Message
          </Button>
        </Form>
        <Info>
          <InfoItem>
            <InfoLabel>ADDRESS:</InfoLabel>
            <Address>98 West 21th Street, Suite 721 New York NY 10016</Address>
          </InfoItem>
          <InfoItem>
            <InfoLabel>PHONE:</InfoLabel>
            <Address>(+1) 435 3533</Address>
          </InfoItem>
          <InfoItem>
            <InfoLabel>EMAIL:</InfoLabel>
            <Address>info@yourdomain.com</Address>
          </InfoItem>
        </Info>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
