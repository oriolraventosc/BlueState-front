import { Container, styled } from "@mui/material";

const RegisterContactStyled = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  flex: 1;
  .add-new-contact {
    font-size: 2rem;
    @media (min-width: 730px) {
      font-size: 2.3rem;
    }
  }
`;

export default RegisterContactStyled;
