// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../interfaces";
import {
  handleAdmins,
  handleAdminPages,
  handleUserPages,
  handleReset,
  handleUsers,
} from "../../redux/usersSlice";

interface UsersState {
  users: {
    users: IUser[];
    userPagesCalled: number[];
    admins: IUser[];
    adminPagesCalled: number[];
  };
}

export const useUsers = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const users = useSelector((state: UsersState) => state.users.users);
  const userPagesCalled = useSelector(
    (state: UsersState) => state.users.userPagesCalled
  );
  const adminPagesCalled = useSelector(
    (state: UsersState) => state.users.adminPagesCalled
  );
  const admins = useSelector((state: UsersState) => state.users.admins);

  const setUsers = (users: IUser[]) => {
    dispatch(handleUsers(users));
  };

  const setUserPagesCalled = (page: number) => {
    dispatch(handleUserPages(page));
  };

  const setAdminPagesCalled = (page: number) => {
    dispatch(handleAdminPages(page));
  };

  const setAdmins = (users: IUser[]) => {
    dispatch(handleAdmins(users));
  };

  const resetUserState = () => {
    dispatch(handleReset());
  };

  return {
    setUsers,
    setUserPagesCalled,
    setAdminPagesCalled,
    setAdmins,
    resetUserState,
    users,
    userPagesCalled,
    adminPagesCalled,
    admins,
  };
};
