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
import RegisterContactStyled from "../RegisterContact/RegisterContactStyled";
import { useParams } from "react-router-dom";
import { Contact } from "../../types/types";

const theme = createTheme();

interface ContactCardProps {
  contact: Contact;
}

const UpdateContactForm = (contact: ContactCardProps): JSX.Element => {
  const {
    contact: {
      name,
      email,
      telephone,
      sector,
      website,
      service,
      logo,
      contacted,
    },
  } = contact;
  const { id } = useParams();
  const intialFormData = {
    name: name,
    email: email,
    telephone: telephone,
    sector: sector,
    website: website,
    service: service,
    logo: logo as File,
    contacted: contacted,
  };
  const [initialForm, setData] = useState(intialFormData);
  const { updateContact } = useBusiness();

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
    let formDataToSubmit;
    event.preventDefault();
    formDataToSubmit = {
      name: initialForm.name,
      email: initialForm.email,
      telephone: initialForm.telephone,
      sector: initialForm.sector,
      website: initialForm.website,
      service: initialForm.service,
      logo: initialForm.logo,
      contacted: initialForm.contacted,
    };
    await updateContact(id!, formDataToSubmit);
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
                Update contact
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
                value={initialForm.name}
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
                value={initialForm.email}
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
                value={initialForm.telephone}
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
                value={initialForm.sector}
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
                value={initialForm.service}
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
                value={initialForm.website}
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
                id="contacted"
                label="Contacted"
                name="contacted"
                onChange={handleFormChange}
                type="date"
                data-testid="contacted"
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
                Update
              </Button>
            </Paper>
          </Box>
        </Container>
      </RegisterContactStyled>
    </ThemeProvider>
  );
};

export default UpdateContactForm;
