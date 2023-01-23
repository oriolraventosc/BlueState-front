import LoadingStyled from "./LoadingStyled";
import { Container } from "@mui/material";

const Loading = (): JSX.Element => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "#f5f5f5",
        position: "fixed",
        zIndex: 8,
        minWidth: "100vw",
      }}
    >
      <LoadingStyled className="spinner" aria-label="loader"></LoadingStyled>
    </Container>
  );
};

export default Loading;
