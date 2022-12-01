import React, { useEffect } from "react";
import Login from "../login/Login";
import { useUser, useCategories } from "../../../utils/hooks";

const Logout = () => {
  const { resetUserState } = useUser();
  const { resetCategoryState } = useCategories();

  useEffect(() => {
    localStorage.removeItem("at");
    resetUserState();
    resetCategoryState();
  }, []);

  return <Login />;
};

export default Logout;
