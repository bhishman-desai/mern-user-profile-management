import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/Profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import styles from "../styles/Username.module.css";

export default function Password() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      /* TODO: Make a call to backend to verify creds */
      window.alert("Log in success!");
      navigate("/profile");
    },
  });

  return (
    <div className="container mx-auto px-4">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Responsive container for the form */}
        <div className={`${styles.glass}`}>
          <div className="title flex flex-col items-center">
            {/*Change name to username or email*/}
            <h4 className="text-4xl sm:text-5xl font-bold">Hello Bhishman!</h4>
            <span className="py-4 text-lg sm:text-xl w-full text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              {/*Change to pfp that the user uploads*/}
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-4 sm:gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
