import React, { PropsWithChildren } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TokenIcon from "@mui/icons-material/Token";
import LoginRegisterFormStyled from "./LoginRegisterFormStyled";
import { Link } from "react-router-dom";

const theme = createTheme();

interface LoginRegisterForm extends PropsWithChildren {
  title: string;
  buttonText: string;
  preLink: string;
  link: string;
  linkText: string;
  handleSubmit: (event: React.SyntheticEvent) => Promise<void>;
  handleFormChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const LoginRegisterFormBase = ({
  title,
  buttonText,
  preLink,
  link,
  linkText,
  handleSubmit,
  handleFormChange,
}: LoginRegisterForm): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <LoginRegisterFormStyled>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="main-box"
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 2,
                gap: 0.5,
              }}
            >
              <TokenIcon aria-label="blueState" className="logo-icon" />
              <Typography aria-label="blueStateSoftware" className="logo-text">
                BlueState
              </Typography>
            </Container>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                aria-label="username"
                name="username"
                onChange={handleFormChange}
                autoComplete="off"
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={handleFormChange}
                label="Password"
                aria-label="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                className="signin-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {buttonText}
              </Button>
              <Typography variant="h5">
                <span className="register-info">
                  {preLink}{" "}
                  <span className="form__link">
                    <Link to={link}>{linkText}</Link>
                  </span>
                </span>
              </Typography>
            </Box>
          </Box>
        </Container>
      </LoginRegisterFormStyled>
    </ThemeProvider>
  );
};

export default LoginRegisterFormBase;
