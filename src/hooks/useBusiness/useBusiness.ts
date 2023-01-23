import axios from "axios";
import {
  deleteContactActionCreator,
  loadAllContactsActionCreator,
  loadContactActionCreator,
} from "../../redux/features/BusinessSlice/BusinessSlice";
import {
  openErrorModalActionCreator,
  openLoadingActionCreator,
  closeLoadingActionCreator,
  openSuccessModalActionCreator,
} from "../../redux/features/UiSlice/UiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ContactStructure } from "../../types/types";

const useBusiness = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const loadAllContacts = useCallback(
    async (page = 1) => {
      const url = `${apiUrl}/contact/list?page=${page}`;
      try {
        dispatch(openLoadingActionCreator());
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const apiResponse = response.data;
        const { contacts } = apiResponse;
        dispatch(loadAllContactsActionCreator(contacts));
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());
        dispatch(openErrorModalActionCreator("There are no contacts"));
      }
    },
    [apiUrl, dispatch, token]
  );

  const loadContact = useCallback(
    async (id: string) => {
      const url = `${apiUrl}/contact/${id}`;

      try {
        dispatch(openLoadingActionCreator());

        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const apiResponse = response.data;
        dispatch(loadContactActionCreator(apiResponse));
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());

        dispatch(openErrorModalActionCreator("Contact not found!"));
      }
    },
    [apiUrl, dispatch, token]
  );

  const deleteContact = async (id: string) => {
    const url = `${apiUrl}/contact/delete/${id}`;

    try {
      await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(deleteContactActionCreator(id));
      navigate("/contacts");
    } catch {
      dispatch(closeLoadingActionCreator());
      dispatch(openErrorModalActionCreator("There are no contacts"));
    }
  };

  const addNewContact = async (contactData: ContactStructure) => {
    const url = `${apiUrl}/contact/add-new-contact`;
    try {
      dispatch(openLoadingActionCreator());
      await axios.post(url, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(openSuccessModalActionCreator(`${contactData.name} created!`));
      dispatch(closeLoadingActionCreator());
      navigate("/contacts");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openErrorModalActionCreator(
          "We couldn't create the contact! Try again later"
        )
      );
    }
  };

  const loadContactsBySector = async (sector: string) => {
    const url = `${apiUrl}/contact/list/${sector}`;
    try {
      dispatch(openLoadingActionCreator());
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const apiResponse = response.data;
      const { contacts } = apiResponse;
      dispatch(loadAllContactsActionCreator(contacts));
      dispatch(closeLoadingActionCreator());
    } catch {
      dispatch(closeLoadingActionCreator());
      dispatch(openErrorModalActionCreator("There are no contacts"));
    }
  };

  const updateContact = async (id: string, contactData: ContactStructure) => {
    const url = `${apiUrl}/contact/update/${id}`;
    try {
      dispatch(openLoadingActionCreator());
      await axios.patch(url, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(openSuccessModalActionCreator(`${contactData.name} updated!`));
      dispatch(closeLoadingActionCreator());
      navigate(`/contacts/contact/${id}`);
    } catch {
      dispatch(closeLoadingActionCreator());
      dispatch(openErrorModalActionCreator("Error updating the contact"));
      navigate(`/contacts/contact/${id}`);
    }
  };

  return {
    loadAllContacts,
    loadContact,
    deleteContact,
    addNewContact,
    loadContactsBySector,
    updateContact,
  };
};

export default useBusiness;
