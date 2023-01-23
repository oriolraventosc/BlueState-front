import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../../types/types";

interface ContactState {
  contacts: Contact[];
  contact: Contact;
}

export const ContactInitialState: ContactState = {
  contacts: [],
  contact: {} as Contact,
};

const contactsSlice = createSlice({
  name: "contact",
  initialState: ContactInitialState,
  reducers: {
    loadAllContacts: (initialState, action: PayloadAction<Contact[]>) => ({
      ...initialState,
      contacts: [...action.payload],
    }),
    loadContact: (initialState, action: PayloadAction<Contact>) => ({
      ...initialState,
      contact: { ...action.payload },
    }),
    deleteContact: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      contacts: [
        ...initialState.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      ],
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {
  loadAllContacts: loadAllContactsActionCreator,
  loadContact: loadContactActionCreator,
  deleteContact: deleteContactActionCreator,
} = contactsSlice.actions;
