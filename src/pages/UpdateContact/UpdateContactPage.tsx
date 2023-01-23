import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UpdateContactForm from "../../components/UpdateContactForm/UpdateContactForm";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import { useAppSelector } from "../../redux/hooks";
import RegisterContactPageStyled from "../RegisterContact/RegisterContactPageStyled";

const UpdateContactPage = (): JSX.Element => {
  const { loadContact } = useBusiness();
  const { id } = useParams();
  const contact = useAppSelector(
    ({ contactsActions }) => contactsActions.contact
  );
  useEffect(() => {
    loadContact(id!);
  }, [id, loadContact]);
  return (
    <RegisterContactPageStyled>
      <Header />
      <UpdateContactForm contact={contact} />
      <Footer />
    </RegisterContactPageStyled>
  );
};

export default UpdateContactPage;
