import Image from "next/image";
import React from "react";
import { logo } from "../../constants";
import styles from "./InvoiceAr.module.css";
import { iconColor } from "../../utils/colors";

const InvoiceAr = () => {
  return (
    <div dir="rtl" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.row}>
            <div className="relative -right-[45px]">
              <Image
                src={logo}
                alt="kibros-logo"
                width={200}
                height={50}
                objectFit="cover"
              />
            </div>
            <p className="text-[20px] text-white">رقم الفاتورة 3492#</p>
          </div>
          <div className={styles.row}>
            <div className={styles.companyDetail}>
              <p>شارع المها</p>
              <p>الخوير، مسقط، عمان</p>
              <p>contact@kibros.com</p>
            </div>
            <div className="flex flex-col space-y-10">
              <p className="text-darkTextSecondary/[0.68]">من : 25/08/2020</p>
              <p className="text-darkTextSecondary/[0.68]">الى : 25/09/2020</p>
            </div>
          </div>
        </div>
        <hr style={{ color: iconColor, opacity: "0.2" }} />
        <div className={styles.customerInformation}>
          <p className="text-white">الى:</p>
          <div className="text-darkTextSecondary/[0.68]">
            <p>طلال العجمي</p>
            <p>92750800</p>
            <p>talal@gmail.com</p>
          </div>
        </div>
        <div className={styles.table}>
          <table className="grid flex-col">
            <thead>
              <tr className="scrollbar-hide flex overflow-x-scroll bg-primary-base p-12">
                <td className="flex-1 ">الغرض</td>
                <td className="flex-1 ">الوصف</td>
                <td className="flex-1 ">الكمية</td>
                <td className="flex-1 ">السعر</td>
              </tr>
            </thead>
            <tbody>
              <tr className="scrollbar-hide flex overflow-x-scroll bg-primary-base p-12">
                <td className="flex-1 ">اشتراك شهري</td>
                <td className="flex-1 ">التحاق بورشة كيبروس الشهرية</td>
                <td className="flex-1 ">1</td>
                <td className="flex-1 ">20 OMR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.amountContainer}>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-darkTextSecondary/[0.68]">Subtotal:</p>
              <p className="font-bold text-white">20 OMR</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-darkTextSecondary/[0.68]">تخفيض:</p>
              <p className="font-bold text-white">0 OMR</p>
            </div>
            <hr style={{ color: iconColor, opacity: "0.2" }} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-darkTextSecondary/[0.68]">المبلغ النهائي:</p>
            <p className="font-bold text-white">20 OMR</p>
          </div>
        </div>
        <hr style={{ color: iconColor, opacity: "0.2" }} />
        <div className="flex justify-end p-20">
          <button className={styles.print}>طبع</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAr;
