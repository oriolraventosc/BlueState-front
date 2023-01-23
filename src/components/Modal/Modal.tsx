import { closeModalActionCreator } from "../../redux/features/UiSlice/UiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const alert = useAppSelector(({ uiModal }) => uiModal.alert);
  const state = useAppSelector(({ uiModal }) => uiModal.state);
  const dispatch = useAppDispatch();

  return (
    <div className="container-alert" aria-label="alert-container">
      <ModalStyled
        className="alert"
        severity={state}
        aria-label="alert"
        onClose={() => dispatch(closeModalActionCreator())}
      >
        {alert}
      </ModalStyled>
    </div>
  );
};

export default Modal;
