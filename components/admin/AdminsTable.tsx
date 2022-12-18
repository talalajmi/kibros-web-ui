import React, { useState, useEffect } from "react";
import { iconColor } from "../../utils/colors";
import { ArrowLeft } from "../icons";
import ArrowRight from "../icons/ArrowRight";
import ExportIcon from "../icons/ExportIcon";

import styles from "./AdminsTable.module.css";
import AccountController from "../../controllers/AccountController";
import { useRouter } from "next/router";
import { IUser } from "../../interfaces";
import { UserRoles } from "../../constants/UserRoles";
import { useUser, useUsers } from "../../utils/hooks";
import { toast } from "react-toastify";
import DataTable, { TableColumn } from "react-data-table-component";
import { adminCsvRows, getAdminValuesForExport } from "../../constants/User";
import EditUserModal from "./user/EditUserModal";
import AddAdminModal from "./add/AddAdminModal";
import Spinner from "../shared/Spinner";
import ArrowDown from "../icons/ArrowDown";
import NoData from "./table/NoData";

const AdminsTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState<IUser[]>([]);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const [isGettingAdmins, setIsGettingAdmins] = useState(false);

  const router = useRouter();
  const { admins, adminPagesCalled, setAdminPagesCalled, setAdmins } =
    useUsers();
  const { accessToken } = useUser();

  const getUsers = async () => {
    setIsLoading(true);
    const users = await new AccountController(accessToken, router).getAccounts(
      currentPage,
      5
    );

    if (!users) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setAdminPagesCalled(currentPage);
    setAdmins([...users.admins]);
  };

  useEffect(() => {
    if (admins.length === 0) {
      // getUsers();
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = admins.filter((admin) => {
        const startsWith =
          admin.fullName.toLowerCase().startsWith(value.toLowerCase()) ||
          admin.email.toLowerCase().startsWith(value.toLowerCase());
        UserRoles[admin.role as keyof typeof UserRoles].title
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes =
          admin.fullName.toLowerCase().includes(value.toLowerCase()) ||
          admin.email.toLowerCase().includes(value.toLowerCase());
        UserRoles[admin.role as keyof typeof UserRoles].title
          .toLowerCase()
          .includes(value.toLowerCase());

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

    if (adminPagesCalled.includes(newPage)) {
      setCurrentPage(newPage);
      return;
    }

    setIsGettingAdmins(true);
    const response = await new AccountController(
      accessToken,
      router
    ).getAccounts(newPage, 5);

    if (!response) {
      setIsGettingAdmins(false);
      return;
    }

    if (response.admins.length === 0) {
      setCurrentPage(newPage - 1);
      setIsGettingAdmins(false);
      setIsNextPageDisabled(true);
      toast.error("No more users can be found");
      return;
    }

    setIsGettingAdmins(false);
    setAdmins([...admins, ...response.admins]);
    setAdminPagesCalled(newPage);
    setCurrentPage(newPage);
  };

  const columns: TableColumn<IUser>[] = [
    {
      name: "#",
      cell: (admin, index) => index + 1,
    },
    {
      name: "User",
      sortable: true,
      selector: (admin) => admin.fullName,
    },
    {
      name: "Email",
      sortable: true,
      selector: (admin) => admin.email,
    },
    {
      name: "Role",
      sortable: true,
      selector: (admin) =>
        UserRoles[admin.role as keyof typeof UserRoles].title,
    },
    {
      name: "Actions",
      cell: (admin) => (
        <div className="flex items-center justify-center space-x-10">
          <EditUserModal user={admin} />
        </div>
      ),
    },
  ];

  const createCsvFormat = (admins: IUser[]) => {
    let csvData: string = adminCsvRows.join(",");
    csvData += "\n";
    admins.forEach((admin) => {
      const values = getAdminValuesForExport(admin);
      csvData += values.join(",");
      csvData += "\n";
    });
    return csvData;
  };

  const downloadCsv = function (admins: IUser[]) {
    const link = document.createElement("a");
    let csv = createCsvFormat(admins);
    if (csv === null) return;

    const filename = "admins.csv";

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
    downloadCsv(response.admins);
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

  if (isLoading) {
    <Spinner />;
  }
  return (
    <>
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
                defaultValue={searchValue}
                placeholder="Search User"
                className="rounded-8 border border-inputOutline border-opacity-20 bg-primary-light p-10 text-white"
                onChange={handleSearch}
              />
              <AddAdminModal />
            </div>
          </div>
          <div className="react-dataTable">
            <DataTable
              noHeader
              pagination
              columns={columns}
              paginationPerPage={5}
              className="react-dataTable"
              progressPending={isGettingAdmins}
              paginationComponent={CustomPagination}
              progressComponent={<Spinner tableLoader />}
              data={searchedData.length ? searchedData : admins}
              noDataComponent={<NoData listName="users" item="user" />}
              sortIcon={
                <ArrowDown
                  size={18}
                  className="fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminsTable;
