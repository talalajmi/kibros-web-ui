import React from "react";
import { ArrowLeft, ArrowRight } from "../../icons";
import styles from "./CustomPagination.module.css";

const CustomPagination = (
  page: number,
  pageDisabled: boolean,
  callNextPage: (page: number) => Promise<void>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  setIsNextPageDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button
          className={page === 1 ? styles.buttonDisabled : styles.button}
          disabled={page === 1}
          onClick={() => {
            setCurrentPage((current) => current - 1);
            setIsNextPageDisabled(false);
          }}
        >
          <ArrowLeft
            size={16}
            className={`${page === 1 ? "fill-white/[0.7]" : "fill-white"}`}
          />
        </button>
        <p className={styles.currentPage}>{page}</p>
        <button
          className={pageDisabled ? styles.buttonDisabled : styles.button}
          disabled={pageDisabled}
          onClick={() => callNextPage(page)}
        >
          <ArrowRight
            size={16}
            className={`${pageDisabled ? "fill-white/[0.7]" : "fill-white"} `}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
