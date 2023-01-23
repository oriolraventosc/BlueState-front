import React, { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import useToken from "./hooks/useToken/useToken";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { getToken } = useToken();
  const alert = useAppSelector(
    ({ uiModal: uiSuccessModal }) => uiSuccessModal.alert
  );
  const isLoading = useAppSelector(({ uiModal }) => uiModal.isLoading);

  getToken();
  return (
    <>
      {alert && <Modal />}
      <Suspense fallback={<Loading />} />
      {isLoading && <Loading />}
      <div className="app">
        <Layout />
      </div>
    </>
  );
};

export default App;
