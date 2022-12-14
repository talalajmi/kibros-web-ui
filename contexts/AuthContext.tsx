// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Types
import { IAuthContextValues, IUser } from "../interfaces";
import { AccountController, AuthController } from "../controllers";
import LoginModel from "../models/LoginModel";
import { hashPassword } from "../helpers";

// ** Third Party Imports
import jwtDecode from "jwt-decode";
import { AdminRoutes } from "../routes/AdminRoutes";

// ** Defaults
const defaultProvider: IAuthContextValues = {
  user: null,
  accessToken: "",
  isLoading: false,
  setUser: () => null,
  setAccessToken: () => String,
  setIsLoading: () => Boolean,
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<IUser | null>(defaultProvider.user);
  const [isLoading, setIsLoading] = useState<boolean>(
    defaultProvider.isLoading
  );
  const [accessToken, setAccessToken] = useState<string>(
    defaultProvider.accessToken
  );

  // ** Hooks
  const router = useRouter();

  const initAuth = async (): Promise<void> => {
    setIsLoading(true);
    const storedToken = window.localStorage.getItem("at");
    if (storedToken) {
      setAccessToken(storedToken);
      const accessTokenDecoded: { nameid: string; role: string } =
        jwtDecode(storedToken);

      await handleGetUser(accessTokenDecoded.nameid, storedToken);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUser = async (userId: string, accessToken: string) => {
    const user: IUser = await new AccountController(
      accessToken,
      router
    ).getAccount(userId);

    if (!user) {
      setIsLoading(false);

      return;
    }

    setIsLoading(false);
    setUser({ ...user });
  };

  const values = {
    user,
    accessToken,
    isLoading,
    setUser,
    setAccessToken,
    setIsLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
