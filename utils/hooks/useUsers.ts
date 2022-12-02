// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../interfaces";
import { handleAdmins, handleReset, handleUsers } from "../../redux/usersSlice";

interface UsersState {
  users: {
    users: IUser[];
    admins: IUser[];
  };
}

export const useUsers = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const users = useSelector((state: UsersState) => state.users.users);
  const admins = useSelector((state: UsersState) => state.users.admins);

  const setUsers = (users: IUser[]) => {
    dispatch(handleUsers(users));
  };

  const setAdmins = (users: IUser[]) => {
    dispatch(handleAdmins(users));
  };

  const resetUserState = () => {
    dispatch(handleReset());
  };

  return {
    setUsers,
    resetUserState,
    users,
    setAdmins,
    admins,
  };
};
