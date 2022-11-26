import React, { useState } from "react";
import { kiBrosOrangeColor, iconColor } from "../../../utils/colors";
import { Input, Label } from "../../form";
import { SearchIcon } from "../../icons";
import InvoiceIcon from "../../icons/InvoiceIcon";
import LockOpen from "../../icons/LockOpen";
import WarningIcon from "../../icons/WarningIcon";
import styles from "./UserSettings.module.css";

const UserSettings = () => {
  const [isSecurityChosen, setIsSecurityChosen] = useState(false);
  const [isInvoiceChosen, setIsInvoiceChosen] = useState(false);

  return (
    <div className={styles.settings__container}>
      <div className={styles.settings__card}>
        <div className={styles.settings__header}>
          <button
            className={
              isInvoiceChosen
                ? styles.settings__activeTab
                : styles.settings__tab
            }
            onClick={() => {
              setIsInvoiceChosen(true);
              setIsSecurityChosen(false);
            }}
          >
            <p>الاشتراكات</p>
            <InvoiceIcon
              size={22}
              color={isInvoiceChosen ? kiBrosOrangeColor : iconColor}
            />
          </button>
          <button
            className={
              isSecurityChosen
                ? styles.settings__activeTab
                : styles.settings__tab
            }
            onClick={() => {
              setIsSecurityChosen(true);
              setIsInvoiceChosen(false);
            }}
          >
            <p>الأمن</p>
            <LockOpen
              size={22}
              color={isSecurityChosen ? kiBrosOrangeColor : iconColor}
            />
          </button>
          <button
            className={
              isSecurityChosen || isInvoiceChosen
                ? styles.settings__tab
                : styles.settings__activeTab
            }
            onClick={() => {
              setIsSecurityChosen(false);
              setIsInvoiceChosen(false);
            }}
          >
            <p>الحساب</p>
            <SearchIcon
              size="18"
              color={
                isSecurityChosen || isInvoiceChosen
                  ? iconColor
                  : kiBrosOrangeColor
              }
            />
          </button>
        </div>
        <form className={styles.settings__body}>
          {isSecurityChosen ? (
            <>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input type="password" />
                  <Label text="">Current Password</Label>
                </div>
              </div>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input type="password" />
                  <Label text="">New Password</Label>
                </div>
                <div className="relative">
                  <Input type="password" />
                  <Label text="">Confirm Password</Label>
                </div>
              </div>
              <hr style={{ color: iconColor, opacity: 0.2 }} />
              <div dir="RTL" className={styles.textContainer}>
                <p className="text-lg">متطلبات كلمة المرور</p>
                <ul>
                  <li className={styles.bulletPoint}>
                    8 أحرف على الأقل - كلما كان ذلك أطول ، كان ذلك أفضل.
                  </li>
                  <li className={styles.bulletPoint}>
                    حرف صغير واحد على الأقل.
                  </li>
                  <li className={styles.bulletPoint}>
                    رقم واحد على الأقل ، رمز.
                  </li>
                </ul>
              </div>
              <div className={styles.settings__row}>
                <div className={styles.settings__buttons}>
                  <button className={styles.settings__submitButton}>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            </>
          ) : isInvoiceChosen ? (
            <></>
          ) : (
            <>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input />
                  <Label text="">First Name</Label>
                </div>
                <div className="relative">
                  <Input />
                  <Label text="">Last Name</Label>
                </div>
              </div>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input />
                  <Label text="">Email</Label>
                </div>
                <div className="relative">
                  <Input />
                  <Label text="">Role</Label>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-10 rounded-8 bg-secondary-base/[0.4] p-10">
                <p className="pt-[4px] text-secondary-base">
                  حسابك غير مفعل، الرجاء تفعيل حسابك من خلال الرسالة التي وصلتك
                  في بريدك الالكتروني
                </p>
                <WarningIcon size={22} color={kiBrosOrangeColor} />
              </div>
              <hr style={{ color: iconColor, opacity: 0.2 }} />
              <div className={styles.settings__row}>
                <div className={styles.settings__buttons}>
                  <button className={styles.settings__submitButton}>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
