import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterContactPage from "../../pages/RegisterContact/RegisterContact";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import UpdateContactPage from "../../pages/UpdateContact/UpdateContactPage";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteWithAuth from "../ProtectedRouteWithAuth/ProtectedRouteWithAuth";

const Contacts = React.lazy(() => import("../../pages/Contacts/Contacts"));
const Details = React.lazy(() => import("../../pages/Details/Details"));

const Layout = (): JSX.Element => {
  const isLogged = useAppSelector(({ userActions }) => userActions.isLogged);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRouteWithAuth isLogged={isLogged}>
              <LoginPage />
            </ProtectedRouteWithAuth>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRouteWithAuth isLogged={isLogged}>
              <Navigate to="/login" />
            </ProtectedRouteWithAuth>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteWithAuth isLogged={isLogged}>
              <RegisterPage />
            </ProtectedRouteWithAuth>
          }
        />
        <Route
          path="/contacts/contact/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Contacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-new-contact"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <RegisterContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts/update/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <UpdateContactPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Layout;
