import Image from "next/image";
import React from "react";
import { logo } from "../../constants";
import styles from "./InvoiceEn.module.css";
import { iconColor } from "../../utils/colors";

const InvoiceEn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.row}>
            <div className="relative -left-[45px]">
              <Image
                src={logo}
                alt="kibros-logo"
                width={200}
                height={50}
                objectFit="cover"
              />
            </div>
            <p className="text-[20px] text-white">Invoice #3492</p>
          </div>
          <div className={styles.row}>
            <div className={styles.companyDetail}>
              <p>Al Maha Street</p>
              <p>Al Khuwair, Muscat, Oman</p>
              <p>contact@kibros.com</p>
            </div>
            <p className="text-darkTextSecondary/[0.68]">
              Date Issued: 25/08/2020
            </p>
          </div>
        </div>
        <hr style={{ color: iconColor, opacity: "0.2" }} />
        <div className={styles.customerInformation}>
          <p className="text-white">Invoice To:</p>
          <div className="text-darkTextSecondary/[0.68]">
            <p>Talal Al Ajmi</p>
            <p>92750800</p>
            <p>talal@gmail.com</p>
          </div>
        </div>
        <div className={styles.table}>
          <table className="flex flex-col justify-between space-y-20">
            <thead>
              <tr className="flex uppercase">
                <td className="flex-1 text-sm">Item</td>
                <td className="flex-1 text-sm">Description</td>
                <td className="flex-1 text-sm">Amount</td>
                <td className="flex-1 text-sm">Price</td>
              </tr>
            </thead>
            <tbody>
              <tr className="flex uppercase">
                <td className="flex-1 text-sm">Monthly Subscription</td>
                <td className="flex-1 text-sm">Course Enrollment</td>
                <td className="flex-1 text-sm">1</td>
                <td className="flex-1 text-sm">20 OMR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.amountContainer}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between space-x-60">
              <p className="text-darkTextSecondary/[0.68]">Subtotal:</p>
              <p className="font-bold text-white">20 OMR</p>
            </div>
            <div className="flex items-center justify-between space-x-60">
              <p className="text-darkTextSecondary/[0.68]">Discount:</p>
              <p className="font-bold text-white">0 OMR</p>
            </div>
            <hr style={{ color: iconColor, opacity: "0.2" }} />
          </div>
          <div className="flex items-center justify-between space-x-60">
            <p className="text-darkTextSecondary/[0.68]">Total:</p>
            <p className="font-bold text-white">20 OMR</p>
          </div>
        </div>
        <hr style={{ color: iconColor, opacity: "0.2" }} />
        <div className="flex justify-end p-20">
          <button className={styles.print}>print</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEn;
