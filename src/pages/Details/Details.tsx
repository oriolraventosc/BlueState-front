import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactCard from "../../components/ContactCard/ContactCard";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import { useAppSelector } from "../../redux/hooks";

const Details = (): JSX.Element => {
  const { loadContact } = useBusiness();
  const { id } = useParams();

  useEffect(() => {
    loadContact(id!);
  }, [loadContact, id]);
  const contact = useAppSelector(
    ({ contactsActions }) => contactsActions.contact
  );
  return (
    <>
      <ContactCard contact={contact} />
    </>
  );
};

export default Details;
