import { Container, styled } from "@mui/material";

const ContactsStyled = styled(Container)`
  min-width: 100vw;
  width: 100%;
  background-color: #f5f5f5;
  flex: 1;
  .contacts-header__title {
    font-size: 2rem;
    @media (min-width: 730px) {
      font-size: 2.3rem;
    }
  }
  .contacts-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 2%;
    gap: 5%;
    @media (min-width: 330px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media (max-width: 729px) {
      padding-top: 6%;
      padding-bottom: 6%;
    }
  }
  .contacts-header__button {
    color: #fff;
  }
  .contacts-header__button:hover {
    color: #1f2937;
  }
  a {
    color: #fff;
  }
  a:hover {
    color: #1f2937;
  }
  button:hover {
    background-color: #fff;
    color: #1f2937;
  }
`;

export default ContactsStyled;
