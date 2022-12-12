import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { accountSettingsInitialValues } from "../../../helpers/userHelper";
import { IUser } from "../../../interfaces";
import { kiBrosOrangeColor, iconColor } from "../../../utils/colors";
import { useAuth } from "../../../utils/hooks";
import { Input, Label } from "../../form";
import { Eye, EyeCrossed, SearchIcon } from "../../icons";
import LockOpen from "../../icons/LockOpen";
import styles from "./AdminSettings.module.css";

const AdminSettings = () => {
  const [isSecurityChosen, setIsSecurityChosen] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { user } = useAuth();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

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
        <Formik
          initialValues={accountSettingsInitialValues(user as IUser)}
          onSubmit={() => {}}
        >
          <Form className={styles.settings__body}>
            {isSecurityChosen ? (
              <>
                <div className={styles.settings__row}>
                  <div className="relative">
                    <Field
                      component={Input}
                      type="password"
                      name="currentPassword"
                    />
                    {isPasswordShown ? (
                      <EyeCrossed
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    ) : (
                      <Eye
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.settings__row}>
                  <div className="relative">
                    <Field
                      component={Input}
                      type="password"
                      name="newPassword"
                    />
                    {isPasswordShown ? (
                      <EyeCrossed
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    ) : (
                      <Eye
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    )}
                  </div>
                  <div className="relative">
                    <Field
                      component={Input}
                      type="password"
                      name="confirmNewPassword"
                    />
                    {isPasswordShown ? (
                      <EyeCrossed
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    ) : (
                      <Eye
                        size={24}
                        className={styles.icon}
                        onClick={() => showPassword()}
                      />
                    )}
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
                    <Field
                      component={Input}
                      placeholder="First Name"
                      name="firstName"
                    />
                    <Label text="">First Name</Label>
                  </div>
                  <div className="relative">
                    <Field component={Input} name="lastName" />
                    <Label text="">Last Name</Label>
                  </div>
                </div>
                <div className={styles.settings__row}>
                  <div className="relative">
                    <Field component={Input} name="email" />
                    <Label text="">Email</Label>
                  </div>
                  <div className="relative">
                    <Field component={Input} name="role" disabled />
                    <Label text="">Role</Label>
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
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminSettings;
