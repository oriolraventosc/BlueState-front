import useBusiness from "./useBusiness";
import { renderHook } from "@testing-library/react";
import privderWrapper from "../../mocks/providerWrapper";
import { store } from "../../redux/store";
import ProviderWrapper from "../../mocks/providerWrapper";
import {
  closeLoadingActionCreator,
  openErrorModalActionCreator,
  openLoadingActionCreator,
  openSuccessModalActionCreator,
} from "../../redux/features/UiSlice/UiSlice";
import { ContactStructure } from "../../types/types";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useBusiness hook", () => {
  describe("When it is invoked with the method loadAllContacts", () => {
    test("Then it should return a list of contacts", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), {
        wrapper: privderWrapper,
      });

      await current.loadAllContacts();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the metho loadAllContacts and axios rejects it", () => {
    test("Then it should dispatch an error modal", async () => {
      const {
        result: {
          current: { loadAllContacts },
        },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });

      await loadAllContacts();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadContact", () => {
    test("Then it should return a contact", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });
      await current.loadContact("637e36a2af517156aa098996");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadContact and axios rejects it", () => {
    test("Then it should dispatch an error modal", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      await current.loadContact("637e36a2af517156aa098996");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method deleteContact", () => {
    test("Then it should call it's dispatch method", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      await current.deleteContact("638473bfaf517156aa0989b8");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method deleteContact and an axios error happens", () => {
    test("Then it should call the dispatch method of the error modal", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      await current.deleteContact("638473bfaf517156aa0989b8");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method addNewContact and an axios error happens", () => {
    test("Then it should call it's next method of the error modal", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });
      const logoIcon = new File(["logo"], "logo.jpg", {
        type: "image/jpg",
      });
      const contact = {
        name: "Accent Systems",
        email: "info@accent-systems.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
        contacted: "2020",
        id: "637e36a2af517156aa098996",
        logo: logoIcon,
      };

      await current.addNewContact(contact);

      expect(dispatch).toHaveBeenCalledWith(
        openErrorModalActionCreator(
          "We couldn't create the contact! Try again later"
        )
      );
    });
  });

  describe("When it is invoked with the method addNewContact", () => {
    test("Then it should call it's navigate method", async () => {
      const {
        result: {
          current: { addNewContact },
        },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      const contact = {
        name: "AccentSystems Business",
        email: "info@accent-systemsBusiness.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
      };
      await addNewContact(contact);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadContactsBySector", () => {
    test("Then it should call it's dispatch method", async () => {
      const {
        result: {
          current: { loadContactsBySector },
        },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      await loadContactsBySector("Marketing");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadContactsBySector and an error happens", () => {
    test("Then it should call it's dispatch method of the error modal", async () => {
      const {
        result: {
          current: { loadContactsBySector },
        },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });

      await loadContactsBySector("Marketing");

      expect(dispatch).toHaveBeenCalledWith(
        openErrorModalActionCreator("There are no contacts")
      );
    });
  });

  describe("When it is invoked with the method updateContact", () => {
    test("Then it should call it's navigate method", async () => {
      const {
        result: {
          current: { updateContact },
        },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });
      const contact = {
        name: "AccentSystems Business",
        email: "info@accent-systemsBusiness.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
      };

      await updateContact("922233881", contact);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method updateContact and an error happens", () => {
    test("Then it should call it's dispatch method of the error modal", async () => {
      const {
        result: {
          current: { updateContact },
        },
      } = renderHook(() => useBusiness(), { wrapper: ProviderWrapper });
      const contact = {
        name: "AccentSystems Business",
        email: "info@accent-systemsBusiness.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
      };

      await updateContact("922233881", contact);

      expect(dispatch).toHaveBeenCalledWith(
        openErrorModalActionCreator("Error updating the contact")
      );
    });
  });
});
