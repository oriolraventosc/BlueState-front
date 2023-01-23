import { Container, styled } from "@mui/material";

const LoginRegisterFormStyled = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-icon {
    font-size: 3.5rem;
    color: #4681f2;
  }
  .logo-text {
    font-size: 1.7rem;
    font-weight: bold;
  }
  .main-box {
    border: 1.5px solid #00000012;
    padding: 30px;
    border-radius: 5px;
    max-width: 500px;
  }
  .signin-button {
    background-color: #4681f2;
    color: #fff;
  }
  .signin-button:hover {
    background-color: #4681f2;
    color: #fff;
  }
  .input-field {
    color: #1f2937;
  }
  .register-info {
    font-size: 1rem;
    padding-top: 10px;
  }
  .form__link {
    font-weight: bold;
    text-decoration: none;
  }
`;

export default LoginRegisterFormStyled;
