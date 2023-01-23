import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { JwtPayloadCustom, User } from "../../types/types";
import {
  userLoginActionCreator,
  userLogoutActionCreator,
} from "../../redux/features/UserSlice/UserSlice";
import {
  openSuccessModalActionCreator,
  openErrorModalActionCreator,
} from "../../redux/features/UiSlice/UiSlice";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userLogin = async (userData: User) => {
    const url = `${apiUrl}/users/login`;
    try {
      const response = await axios.post(url, userData);

      const { accessToken } = await response.data;

      const loggedUser: JwtPayloadCustom = jwtDecode(accessToken);
      dispatch(
        userLoginActionCreator({
          ...loggedUser,
          accesstoken: accessToken,
        })
      );

      window.localStorage.setItem("token", accessToken);

      navigate("/contacts");
    } catch (error: unknown) {
      dispatch(openErrorModalActionCreator("An error ocurred logging in!"));
    }
  };

  const userRegister = async (userData: User) => {
    const url = `${apiUrl}/users/register`;
    try {
      await axios.post(url, userData);
      dispatch(
        openSuccessModalActionCreator(`User ${userData.username} registered!`)
      );
      navigate("/login");
    } catch (error: unknown) {
      dispatch(openErrorModalActionCreator(`An error ocurred registering!`));
    }
  };

  const userLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(userLogoutActionCreator());
  };

  return { userLogin, userRegister, userLogout };
};

export default useUser;
