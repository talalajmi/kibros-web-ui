import { IUser } from "./User";

export interface IAuthContextValues {
  user: IUser | null;
  accessToken: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setUser: (value: IUser | null) => void;
  setAccessToken: (value: string) => void;
}
