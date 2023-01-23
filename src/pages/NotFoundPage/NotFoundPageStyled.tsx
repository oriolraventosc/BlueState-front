import { Container, styled } from "@mui/material";

const NotFoundPageStyled = styled(Container)`
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  min-width: 100vw;
  -webkit-box-align: center;
  align-items: center;
  width: 100vw;
  padding-right: 0;
  background-color: #f5f5f5;
  padding-top: 10%;
  padding-bottom: 10%;
  justify-content: center;
  padding-left: 0px;
  height: calc(100vh - 100px);
  h2 {
    letter-spacing: -0.00833em;
    margin: 2% 20%;
  }
  .back-to-contacts {
    font-weight: lighter;
    font-size: 1.1rem;
  }
  button {
    margin-top: 0%;
    background-color: #4681f2;
    color: #fff;
    padding-left: 5%;
    padding-right: 5%;
    width: 146px;
  }
  button:hover {
    color: #1f2937;
    background-color: #fff;
  }
`;

export default NotFoundPageStyled;
