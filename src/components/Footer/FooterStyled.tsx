import { Container, styled } from "@mui/material";

const FooterStyled = styled(Container)`
  min-width: 100vw;
  width: 100%;
  margin: 0;
  max-width: 100%;
  margin-right: 0;
  .footer__title {
    font-size: 1rem;
    @media (min-width: 230px) {
      font-size: 1.5rem;
    }
    @media (min-width: 730px) {
      font-size: 2.5rem;
    }
  }
  &&__title {
    font-weight: 700;
  }

  &&__created-by {
    font-weight: lighter;
    display: inline-block;
  }
  .footer__creators {
    display: inline-block;
    font-size: 0.7rem;
    @media (min-width: 230px) {
      font-size: 0.9rem;
    }
    @media (min-width: 730px) {
      font-size: 1.2rem;
    }
  }
  .footer__created-by {
    font-size: 0.7rem;
    @media (min-width: 230px) {
      font-size: 0.9rem;
    }
    @media (min-width: 730px) {
      font-size: 1.2rem;
    }
  }
`;

export default FooterStyled;
