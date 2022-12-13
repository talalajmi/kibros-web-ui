import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AccountController } from "../controllers";
import { IAuthContextValues, IUser } from "../interfaces";
import { AuthorizationRoutes } from "../routes";
import { AdminRoutes } from "../routes/AdminRoutes";

const defaultProvider: IAuthContextValues = {
  user: null,
  accessToken: "",
  isLoading: false,
  setUser: () => null,
  setAccessToken: () => "",
  setIsLoading: () => false,
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  //** States */
  const [user, setUser] = useState<IUser | null>(defaultProvider.user);
  const [accessToken, setAccessToken] = useState<string>(
    defaultProvider.accessToken
  );
  const [isLoading, setIsLoading] = useState(defaultProvider.isLoading);

  //** Hooks */
  const router = useRouter();

  const initAuth = async (): Promise<void> => {
    const accessTokenFromLocalStorage = window.localStorage.getItem("at");
    if (accessTokenFromLocalStorage) {
      setAccessToken(accessTokenFromLocalStorage);
      const accessTokenDecoded: { nameid: string; role: string } = jwtDecode(
        accessTokenFromLocalStorage
      );
      await handleGetUser(
        accessTokenFromLocalStorage,
        accessTokenDecoded.nameid
      );
    } else {
      setIsLoading(false);
      router.push(router.pathname);
    }
  };

  useEffect(() => {
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUser = async (accessToken: string, userId: string) => {
    setIsLoading(true);

    const user = await new AccountController(accessToken, router).getAccount(
      userId
    );

    if (!user) {
      return;
    }

    setUser({ ...user });
    setIsLoading(false);
  };

  const values = {
    user,
    setUser,
    isLoading,
    accessToken,
    setIsLoading,
    setAccessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
