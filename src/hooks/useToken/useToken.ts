import { useCallback } from "react";
import { userLoginActionCreator } from "../../redux/features/UserSlice/UserSlice";

import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decode/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const accesstoken = window.localStorage.getItem("token");

    if (!accesstoken) {
      return;
    }
    const user = decodeToken(accesstoken);
    dispatch(userLoginActionCreator({ ...user, accesstoken }));
  }, [dispatch]);

  return { getToken };
};

export default useToken;
