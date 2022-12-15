import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AccountController, PasswordController } from "../../../controllers";
import {
  AccountSettingsFormInputs,
  accountSettingsInitialValues,
  ChangePasswordFormInputs,
  changePasswordInitialValues,
} from "../../../helpers/userHelper";
import { IUser } from "../../../interfaces";
import {
  changePasswordScheme,
  userAccountSettingsSchema,
} from "../../../schemas/userSchema";
import { kiBrosOrangeColor, iconColor } from "../../../utils/colors";
import { useAuth } from "../../../utils/hooks";
import { Input, Label } from "../../form";
import { Eye, EyeCrossed, SearchIcon } from "../../icons";
import LockOpen from "../../icons/LockOpen";
import styles from "./AdminSettings.module.css";
import { ChangePasswordModel, UpdateAccountModel } from "../../../models";
import { hashPassword } from "../../../helpers/hashPassword";

const AdminSettings = () => {
  const [isSecurityChosen, setIsSecurityChosen] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, accessToken, setUser } = useAuth();
  const router = useRouter();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  const changePassword = async ({
    confirmNewPassword,
  }: ChangePasswordFormInputs) => {
    setIsLoading(true);
    if (!user) {
      return;
    }
    await new PasswordController(router).changePassword(
      new ChangePasswordModel(user?.id, await hashPassword(confirmNewPassword))
    );
    setIsLoading(false);
  };

  const updateUser = async (data: AccountSettingsFormInputs) => {
    setIsLoading(true);
    if (!user) {
      return;
    }
    const response = await new AccountController(
      accessToken,
      router
    ).updateAccount(
      user?.id,
      new UpdateAccountModel(
        data.firstName,
        data.lastName,
        user?.phoneNumber,
        user?.country,
        user?.role,
        user?.isSuspended
      )
    );

    if (!response) {
      return;
    }
    setUser({ ...response });
    setIsLoading(false);
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

        <div className={styles.settings__body}>
          {isSecurityChosen ? (
            <Formik
              initialValues={changePasswordInitialValues()}
              onSubmit={changePassword}
              validationSchema={changePasswordScheme}
            >
              <Form className="space-y-20">
                <div className={styles.settings__row}>
                  <div className="relative">
                    <Field
                      component={Input}
                      type={isPasswordShown ? "text" : "password"}
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
                      id="new-pass"
                      component={Input}
                      type={isPasswordShown ? "text" : "password"}
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
                      type={isPasswordShown ? "text" : "password"}
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
                    <button
                      className={
                        isLoading
                          ? styles.settings__disabledButton
                          : styles.settings__submitButton
                      }
                      disabled={isLoading ? true : false}
                      type="submit"
                    >
                      SAVE CHANGES
                    </button>
                    <button
                      className={styles.settings__cancelButton}
                      type="button"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          ) : (
            <Formik
              initialValues={accountSettingsInitialValues(user)}
              onSubmit={updateUser}
              validationSchema={userAccountSettingsSchema}
            >
              <Form className="space-y-20">
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
                    <button
                      className={
                        isLoading
                          ? styles.settings__disabledButton
                          : styles.settings__submitButton
                      }
                      disabled={isLoading ? true : false}
                      type="submit"
                    >
                      SAVE CHANGES
                    </button>
                    <button
                      className={styles.settings__cancelButton}
                      type="button"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
