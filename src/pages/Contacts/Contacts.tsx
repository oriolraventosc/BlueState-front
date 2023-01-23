import React from "react";
import { Container, Typography, Button, ThemeProvider } from "@mui/material";
import ContactsList from "../../components/ContactsList/ContactsList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainTheme from "../../styles/mainTheme";
import ContactsStyled from "./ContactsStyled";
import useToken from "../../hooks/useToken/useToken";
import ContactsMainContainerStyled from "./ContactsMainContainerStyled";
import { useNavigate } from "react-router-dom";

const Contacts = (): JSX.Element => {
  const navigate = useNavigate();
  const { getToken } = useToken();
  getToken();
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <ContactsMainContainerStyled className="main-container">
          <div>
            <Header />
          </div>
          <ContactsStyled>
            <Container className="contacts-header">
              <Typography
                variant="h1"
                className="contacts-header__title"
                sx={{ fontWeight: "bold" }}
              >
                Contacts
              </Typography>
              <Button
                onClick={() => navigate("/add-new-contact")}
                className="contacts-header__button"
                sx={{
                  bgcolor: (MainTheme) => MainTheme.palette.primary.main,
                  pl: "2.5%",
                  pr: "2.5%",
                }}
              >
                New contact
              </Button>
            </Container>
            <Container>
              <ContactsList />
            </Container>
          </ContactsStyled>
          <Footer />
        </ContactsMainContainerStyled>
      </ThemeProvider>
    </>
  );
};

export default Contacts;
