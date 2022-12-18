import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { UserRoles } from "../../constants";
import { customPages } from "../../routes";
import { useUser } from "../../utils/hooks";
import AccountController from "../../controllers/AccountController";
import { isObjEmpty } from "../../utils/utils";
import Error401 from "../../pages/custom-pages/401";
import Spinner from "../shared/Spinner";

type Props = {
  children: ReactNode;
};

const RequireAdmin = ({ children }: Props) => {
  // ** States
  const [isLoading, setIsLoading] = useState(false);

  // ** Hooks
  const { user, setUser, setAccessToken } = useUser();
  const router = useRouter();

  const getAdminDetails = async (id: string, accessToken: string) => {
    setIsLoading(true);
    const admin = await new AccountController(accessToken, router).getAccount(
      id
    );

    if (!admin) {
      return;
    }

    setIsLoading(false);
    setUser({ ...admin });
  };

  const authorizeAdmin = async () => {
    if (isObjEmpty(user)) {
      const localStorageAccessToken = localStorage.getItem("at");

      if (localStorageAccessToken) {
        const localStorageAccessTokenDecoded: { nameid: string; role: string } =
          jwtDecode(localStorageAccessToken);
        if (localStorageAccessTokenDecoded.role !== UserRoles[3].title) {
          localStorage.removeItem("at");
          router.push(customPages.error401);
          return;
        }
        setAccessToken(localStorageAccessToken);
        await getAdminDetails(
          localStorageAccessTokenDecoded.nameid,
          localStorageAccessToken
        );
      } else {
        localStorage.removeItem("at");
        router.push(customPages.error401);
        return;
      }
    }
  };

  useEffect(() => {
    authorizeAdmin();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isObjEmpty(user)) {
    return <>{children}</>;
  } else {
    return <Error401 />;
  }
};

export default RequireAdmin;
