import { ThemeProvider, Typography } from "@mui/material";
import MainTheme from "../../styles/mainTheme";
import FooterStyled from "./FooterStyled";

const Footer = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <FooterStyled
        sx={{
          bgcolor: (MainTheme) => MainTheme.palette.primary.dark,
          ml: 0,
          mr: 0,
          minWidth: "100%",
          pt: "3%",
          pb: "3%",
        }}
        className="footer"
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: (MainTheme) => MainTheme.palette.primary.main,
          }}
          className="footer__title"
        >
          BlueState
        </Typography>
        <Typography
          className="footer__created-by"
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
            pt: "1%",
            pb: "0.5%",
            fontWeight: "100",
            display: "inline-block",
          }}
        >
          Made by
        </Typography>
        <Typography
          className="footer__creators"
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "700",
            pl: "5px",
            display: "inline-block",
          }}
        >
          ORIOL RAVENTÓS
        </Typography>
      </FooterStyled>
    </ThemeProvider>
  );
};

export default Footer;
