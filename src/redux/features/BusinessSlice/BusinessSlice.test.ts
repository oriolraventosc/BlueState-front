import {
  contactsReducer,
  loadAllContactsActionCreator,
  ContactInitialState,
  loadContactActionCreator,
  deleteContactActionCreator,
} from "./BusinessSlice";

describe("Given a contactsReducer", () => {
  describe("When it is invoked with it's method loadAllContacts", () => {
    test("Then it should show an array of contacts", () => {
      const action = loadAllContactsActionCreator([
        {
          name: "app2U",
          email: "info@app2u.es",
          telephone: 9345001289,
          sector: "Technology",
          website: "www.app2u.es",
          service: "App development",
          logo: "app2U.png",
          backUpLogo: "app2U.png",
          contacted: "2022",
          id: "123145",
        },
      ]);
      const initialState = ContactInitialState;
      const expectedState = {
        contact: {},
        contacts: [
          {
            name: "app2U",
            email: "info@app2u.es",
            telephone: 9345001289,
            sector: "Technology",
            website: "www.app2u.es",
            service: "App development",
            logo: "app2U.png",
            id: "123145",
            backUpLogo: "app2U.png",
            contacted: "2022",
          },
        ],
      };

      const newState = contactsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with it's method loadContact", () => {
    test("Then it should show a contact", () => {
      const action = loadContactActionCreator({
        name: "Accent Systems",
        email: "info@accent-systems.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
        logo: "https://accent-systems.com/wp-content/uploads/accent-logo.png",
        backUpLogo:
          "https://accent-systems.com/wp-content/uploads/accent-logo.png",
        contacted: "2020",
        id: "637e36a2af517156aa098996",
      });
      const initialState = ContactInitialState;
      const expectedState = {
        contact: {
          name: "Accent Systems",
          email: "info@accent-systems.com",
          telephone: 935125138,
          sector: "Technology",
          website: "https://accent-systems.com/es/",
          service: "Technical Engineering Services",
          logo: "https://accent-systems.com/wp-content/uploads/accent-logo.png",
          backUpLogo:
            "https://accent-systems.com/wp-content/uploads/accent-logo.png",
          contacted: "2020",
          id: "637e36a2af517156aa098996",
        },
        contacts: [],
      };

      const newState = contactsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method deleteContact", () => {
    test("Then it should delete the contact with the id '123145'", () => {
      const action = deleteContactActionCreator("123145");
      const initialState = {
        contacts: [
          {
            name: "app2U",
            email: "info@app2u.es",
            telephone: 9345001289,
            sector: "Technology",
            website: "www.app2u.es",
            service: "App development",
            logo: "app2U.png",
            id: "123145",
            backUpLogo: "app2U.png",
            contacted: "2022",
          },
        ],
        contact: {
          name: "app2U",
          email: "info@app2u.es",
          telephone: 9345001289,
          sector: "Technology",
          website: "www.app2u.es",
          service: "App development",
          logo: "app2U.png",
          id: "123145",
          backUpLogo: "app2U.png",
          contacted: "2022",
        },
      };
      const expectedState = {
        contact: {
          backUpLogo: "app2U.png",
          contacted: "2022",
          email: "info@app2u.es",
          id: "123145",
          logo: "app2U.png",
          name: "app2U",
          sector: "Technology",
          service: "App development",
          telephone: 9345001289,
          website: "www.app2u.es",
        },
        contacts: [],
      };

      const newState = contactsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
