import React, { useState } from "react";
import { kiBrosOrangeColor, iconColor } from "../../../utils/colors";
import { Input, Label } from "../../form";
import { SearchIcon } from "../../icons";
import LockOpen from "../../icons/LockOpen";
import styles from "./AdminSettings.module.css";

const AdminSettings = () => {
  const [isSecurityChosen, setIsSecurityChosen] = useState(false);

  return (
    <div className={styles.settings__container}>
      <div className={styles.settings__card}>
        <div className={styles.settings__header}>
          <button
            className={
              isSecurityChosen
                ? styles.settings__tab
                : styles.settings__activeTab
            }
            onClick={() => setIsSecurityChosen((current) => !current)}
          >
            <SearchIcon
              size="18"
              color={isSecurityChosen ? iconColor : kiBrosOrangeColor}
            />
            <p>ACCOUNT</p>
          </button>
          <button
            className={
              isSecurityChosen
                ? styles.settings__activeTab
                : styles.settings__tab
            }
            onClick={() => setIsSecurityChosen((current) => !current)}
          >
            <LockOpen
              size={22}
              color={isSecurityChosen ? kiBrosOrangeColor : iconColor}
            />
            <p>SECURITY</p>
          </button>
        </div>
        <form className={styles.settings__body}>
          {isSecurityChosen ? (
            <>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input type="password" />
                  <Label>Current Password</Label>
                </div>
              </div>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input type="password" />
                  <Label>New Password</Label>
                </div>
                <div className="relative">
                  <Input type="password" />
                  <Label>Confirm Password</Label>
                </div>
              </div>
              <hr style={{ color: iconColor, opacity: 0.2 }} />
              <div className={styles.textContainer}>
                <p>PASSWORD REQUIREMENTS</p>
                <ul>
                  <li className={styles.bulletPoint}>
                    Minimum 8 characters long - the more, the better.
                  </li>
                  <li className={styles.bulletPoint}>
                    At least one lowercase character.
                  </li>
                  <li className={styles.bulletPoint}>
                    At least one number, symbol.
                  </li>
                </ul>
              </div>
              <div className={styles.settings__row}>
                <div className={styles.settings__buttons}>
                  <button className={styles.settings__submitButton}>
                    SAVE CHANGES
                  </button>
                  <button className={styles.settings__cancelButton}>
                    CANCEL
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input />
                  <Label>First Name</Label>
                </div>
                <div className="relative">
                  <Input />
                  <Label>Last Name</Label>
                </div>
              </div>
              <div className={styles.settings__row}>
                <div className="relative">
                  <Input />
                  <Label>Email</Label>
                </div>
                <div className="relative">
                  <Input />
                  <Label>Role</Label>
                </div>
              </div>
              <hr style={{ color: iconColor, opacity: 0.2 }} />
              <div className={styles.settings__row}>
                <div className={styles.settings__buttons}>
                  <button className={styles.settings__submitButton}>
                    SAVE CHANGES
                  </button>
                  <button className={styles.settings__cancelButton}>
                    CANCEL
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

export default AdminSettings;
