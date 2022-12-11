import React, { useEffect } from "react";
import Login from "../login/Login";
import { useUser, useCategories, useAuth } from "../../../utils/hooks";

const Logout = () => {
  const { resetUserState } = useUser();
  const { setUser, setAccessToken } = useAuth();
  const { resetCategoryState } = useCategories();

  useEffect(() => {
    localStorage.removeItem("at");
    resetUserState();
    setUser(null);
    setAccessToken("");
    resetCategoryState();
  }, []);

  return <Login />;
};

export default Logout;
