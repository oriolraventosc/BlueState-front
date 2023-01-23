import { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import RegisterContactStyled from "./RegisterContactStyled";

const theme = createTheme();

const RegisterContact = (): JSX.Element => {
  const intialFormData = {
    name: "",
    email: "",
    telephone: 34,
    sector: "",
    website: "",
    service: "",
    logo: {} as File,
  };
  const [initialForm, setData] = useState(intialFormData);
  const { addNewContact } = useBusiness();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.id === "logo") {
      const input = event.target as HTMLInputElement;
      const files = input.files as FileList;

      setData({
        ...initialForm,

        [event.target.id]: files[0],
      });
      return;
    }

    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      name: initialForm.name,
      email: initialForm.email,
      telephone: initialForm.telephone,
      sector: initialForm.sector,
      website: initialForm.website,
      service: initialForm.service,
      logo: initialForm.logo,
    };
    await addNewContact(formDataToSubmit);
  };
  return (
    <ThemeProvider theme={theme}>
      <RegisterContactStyled>
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
                fontWeight: "bold",
                gap: 0.5,
              }}
            >
              <Typography
                aria-label="add-new-contact"
                className="add-new-contact"
                variant="h1"
              >
                Add new contact
              </Typography>
            </Container>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, boxShadow: "none" }}
            >
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleFormChange}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={handleFormChange}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="Telephone"
                aria-label="telephone"
                name="telephone"
                onChange={handleFormChange}
                autoComplete="off"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="sector"
                label="Sector"
                name="sector"
                onChange={handleFormChange}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="service"
                label="Service"
                name="service"
                onChange={handleFormChange}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="website"
                label="Website"
                name="website"
                onChange={handleFormChange}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                id="logo"
                label="Logo"
                name="logo"
                onChange={handleFormChange}
                type="file"
                data-testid="upload-logo"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                className="signin-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, height: "3rem", fontSize: "1rem" }}
              >
                Add contact
              </Button>
            </Paper>
          </Box>
        </Container>
      </RegisterContactStyled>
    </ThemeProvider>
  );
};

export default RegisterContact;
