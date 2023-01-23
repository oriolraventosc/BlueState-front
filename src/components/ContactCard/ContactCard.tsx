import { Contact } from "../../types/types";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import MainTheme from "../../styles/mainTheme";
import { Button, Typography } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactsMainContainerStyled from "../../pages/Contacts/ContactsMainContainerStyled";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import CardStyled from "./CardStyled";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = (contact: ContactCardProps): JSX.Element => {
  const navigate = useNavigate();
  const {
    contact: {
      name,
      email,
      telephone,
      sector,
      service,
      website,
      id,
      backUpLogo,
    },
  } = contact;
  const { deleteContact } = useBusiness();
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <ContactsMainContainerStyled>
          <Header />
          <>
            <ThemeProvider theme={MainTheme}>
              <CardStyled className="card">
                <div className="card-header">
                  <h1 className="card-header__title">{name}</h1>
                  <button
                    className="card-header__delete"
                    onClick={() => deleteContact(id)}
                  >
                    DELETE
                  </button>
                </div>
                <div className="card-body">
                  <img alt={name} src={backUpLogo}></img>
                  <div className="card-body-info-container">
                    <div className="card-body__header">
                      <span>Business details</span>
                      <Button
                        onClick={() => navigate(`/contacts/update/${id}`)}
                      >
                        Edit
                      </Button>
                    </div>
                    <div
                      className="card-body__data"
                      aria-label="card-body-data"
                    >
                      <Typography>
                        Email: <a href={`mailto:${email}`}>{email}</a>
                      </Typography>
                      <Typography>
                        Telephone: <a href={`tel:${telephone}`}>{telephone}</a>
                      </Typography>
                      <Typography>
                        Website: <a href={`${website}`}>{website}</a>
                      </Typography>
                      <Typography>
                        Sector: <span className="sector-service">{sector}</span>
                      </Typography>
                      <Typography>
                        Service:{" "}
                        <span className="sector-service">{service}</span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardStyled>
            </ThemeProvider>
          </>
          <Footer />
        </ContactsMainContainerStyled>
      </ThemeProvider>
    </>
  );
};

export default ContactCard;
