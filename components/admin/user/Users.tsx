import React, { useEffect, useState } from "react";
import { iconColor } from "../../../utils/colors";
import ExportIcon from "../../icons/ExportIcon";
import styles from "./Users.module.css";
import { useRouter } from "next/router";
import { AccountController } from "../../../controllers";
import { IUser } from "../../../interfaces";
import { EditUserModal } from "..";
import { useUser, useUsers } from "../../../utils/hooks";
import DataTable, { TableColumn } from "react-data-table-component";
import { UserRoles } from "../../../constants/UserRoles";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight } from "../../icons";
import { getUserValuesForExport, userCsvRows } from "../../../constants/User";

const options = [
  { label: "Free", value: "Free User" },
  { label: "Premium", value: "Premium User" },
];

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState<IUser[]>([]);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const [isGettingUsers, setIsGettingUsers] = useState(false);

  const { accessToken } = useUser();
  const { users, setUsers, userPagesCalled, setUserPagesCalled } = useUsers();

  const router = useRouter();

  const getUsers = async () => {
    setIsLoading(true);
    const response = await new AccountController(
      accessToken,
      router
    ).getAccounts(currentPage, 5);

    if (!response) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setUserPagesCalled(currentPage);
    setUsers([...response.users]);
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = users.filter((user) => {
        const startsWith =
          user.fullName.toLowerCase().startsWith(value.toLowerCase()) ||
          user.email.toLowerCase().startsWith(value.toLowerCase()) ||
          UserRoles[user.role as keyof typeof UserRoles].title
            .toLowerCase()
            .startsWith(value.toLowerCase());
        // user.subsecriptions.toLowerCase().startsWith(value.toLowerCase());

        const includes =
          user.fullName.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase()) ||
          UserRoles[user.role as keyof typeof UserRoles].title
            .toLowerCase()
            .includes(value.toLowerCase());
        // user.subsecriptions.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setSearchedData(updatedData);
      setSearchValue(value);
    }
  };

  const callNextPage = async (page: number) => {
    const newPage = page + 1;
    if (userPagesCalled.includes(newPage)) {
      setCurrentPage(newPage);
    } else {
      setIsGettingUsers(true);
      const response = await new AccountController(
        accessToken,
        router
      ).getAccounts(newPage, 5);

      if (!response) {
        setIsGettingUsers(false);
        return;
      }

      if (response.users.length === 0) {
        setCurrentPage(newPage - 1);
        setIsGettingUsers(false);
        setIsNextPageDisabled(true);
        toast.error("No more users can be found");
        return;
      }

      setIsGettingUsers(false);
      setUsers([...users, ...response.users]);
      setUserPagesCalled(newPage);
      setCurrentPage(newPage);
    }
  };

  const columns: TableColumn<IUser>[] = [
    {
      name: "#",
      cell: (user, index) => index + 1,
    },
    {
      name: "User",
      sortable: true,
      selector: (user) => user.fullName,
    },
    {
      name: "Email",
      sortable: true,
      selector: (user) => user.email,
    },
    {
      name: "Role",
      sortable: true,
      selector: (user) => UserRoles[user.role as keyof typeof UserRoles].title,
    },
    {
      name: "Status",
      sortable: true,
      cell: (user) => {
        const isPremium =
          UserRoles[user.role as keyof typeof UserRoles].title ===
          "Premium User";
        return (
          <div
            className={`flex w-fit items-center justify-center rounded-100 px-10 py-5 ${
              isPremium
                ? "bg-success-base/[0.2] text-success-base"
                : "bg-secondary-base/[0.2] text-secondary-base"
            }`}
          >
            {isPremium ? "Subscribed" : "Not Subscribed"}
          </div>
        );
      },
    },
    {
      name: "Subscription",
      selector: () => "VIEW SUBSCRIPTION",
    },
    {
      name: "Actions",
      cell: (user) => (
        <div className="flex items-center justify-center space-x-10">
          <EditUserModal user={user} />
        </div>
      ),
    },
  ];

  const createCsvFormat = (users: IUser[]) => {
    let csvData: string = userCsvRows.join(",");
    csvData += "\n";
    users.forEach((user) => {
      const values = getUserValuesForExport(user);
      csvData += values.join(",");
      csvData += "\n";
    });
    return csvData;
  };

  const downloadCsv = function (users: IUser[]) {
    const link = document.createElement("a");
    let csv = createCsvFormat(users);
    if (csv === null) return;

    const filename = "users.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  };

  const exportToCSV = async () => {
    const response = await new AccountController(
      accessToken,
      router
    ).getAllAccounts();

    if (!response) {
      return;
    }

    downloadCsv(response.users);
  };

  const CustomPagination = () => {
    return (
      <div className={styles.paginationContainer}>
        <div className={styles.row}>
          <button
            className={
              currentPage === 1 ? styles.buttonDisabled : styles.button
            }
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((current) => current - 1);
              setIsNextPageDisabled(false);
            }}
          >
            <ArrowLeft
              size={16}
              className={`${
                currentPage === 1 ? "fill-white/[0.7]" : "fill-white"
              }`}
            />
          </button>
          <p className={styles.currentPage}>{currentPage}</p>
          <button
            className={
              isNextPageDisabled ? styles.buttonDisabled : styles.button
            }
            disabled={isNextPageDisabled}
            onClick={() => callNextPage(currentPage)}
          >
            <ArrowRight
              size={16}
              className={`${
                isNextPageDisabled ? "fill-white/[0.7]" : "fill-white"
              } `}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className={styles.container}>
        <div className={styles.tableCard}>
          <div className={styles.header}>
            <button
              className={styles.exportButton}
              onClick={() => exportToCSV()}
            >
              <ExportIcon size="24" color={iconColor} opacity="0.68" />
              <span>Export to CSV</span>
            </button>
            <div className={styles.searchContainer}>
              <input
                placeholder="Search User"
                className="rounded-8 border border-inputOutline/[.2] bg-primary-light p-10 text-white transition duration-300 ease-in-out focus:border-secondary-base/[.4] focus:outline-none focus:ring-0"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="react-dataTable">
            <DataTable
              noHeader
              pagination
              columns={columns}
              paginationPerPage={5}
              className="react-dataTable"
              progressPending={isGettingUsers}
              paginationComponent={CustomPagination}
              data={searchValue.length ? searchedData : users}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
