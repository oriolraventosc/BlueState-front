import NotFoundPageStyled from "./NotFoundPageStyled";
import { Typography, Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainTheme from "../../styles/mainTheme";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={MainTheme}>
      <Header />
      <NotFoundPageStyled sx={{ pl: 0 }}>
        <Typography
          variant="h1"
          sx={{ color: (MainTheme) => MainTheme.palette.primary.dark }}
        >
          Oh no!
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: (MainTheme) => MainTheme.palette.primary.dark }}
        >
          The page you are looking for does not exist
        </Typography>
        <Typography
          className="back-to-contacts"
          sx={{ color: (MainTheme) => MainTheme.palette.primary.dark }}
        >
          Go back to
        </Typography>
        <Button onClick={() => navigate("/contacts")}>CONTACTS</Button>
      </NotFoundPageStyled>
      <Footer />
    </ThemeProvider>
  );
};

export default NotFoundPage;
