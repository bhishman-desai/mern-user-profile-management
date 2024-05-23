import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Username.module.css";

export default function Reset() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      // TODO: Make a call to backend to reset password
      window.alert("Password Reset success!");
      navigate("/password");
    },
  });

  return (
    <div className="container mx-auto px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center min-h-screen">
        <div className={`${styles.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl sm:text-5xl font-bold">Reset</h4>
            <span className="py-4 text-lg sm:text-xl w-full text-center text-gray-500">
              Enter new password.
            </span>
          </div>

          <form className="py-4 sm:py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-4 sm:gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
                type="password"
                placeholder="Repeat Password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
