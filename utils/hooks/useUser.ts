// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../interfaces";
import {
  handleLogout,
  handleUserLogin,
  handleAccessToken,
} from "../../redux/userSlice";

interface UserState {
  user: {
    user: IUser;
    accessToken: string;
  };
}

export const useUser = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user.user);
  const accessToken = useSelector((state: UserState) => state.user.accessToken);
  const userAccessToken = useSelector(
    (state: UserState) => state.user.accessToken
  );

  const setUser = (user: IUser) => {
    dispatch(handleUserLogin({ user }));
  };

  const setAccessToken = (accessToken: string) => {
    dispatch(handleAccessToken(accessToken));
  };

  const resetUserState = () => {
    dispatch(handleLogout());
  };

  return {
    setUser,
    setAccessToken,
    resetUserState,
    user,
    accessToken,
    userAccessToken,
  };
};
