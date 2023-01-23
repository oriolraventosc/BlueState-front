import { Alert, styled } from "@mui/material";

const ModalStyled = styled(Alert)`
  position: fixed;
  top: 50%;
  translate: -50%;
  left: 50%;
  z-index: 8;
`;

export default ModalStyled;
