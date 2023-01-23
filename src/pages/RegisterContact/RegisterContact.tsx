import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RegisterContact from "../../components/RegisterContact/RegisterContact";
import RegisterContactPageStyled from "./RegisterContactPageStyled";

const RegisterContactPage = (): JSX.Element => {
  return (
    <RegisterContactPageStyled>
      <Header />
      <RegisterContact />
      <Footer />
    </RegisterContactPageStyled>
  );
};

export default RegisterContactPage;
