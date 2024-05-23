import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/Profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";

import styles from "../styles/Username.module.css";

export default function Username() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      navigate("/password");
    },
  });

  return (
    <div className="container mx-auto px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col justify-center items-center min-h-screen">
        <div
          className={`${styles.glass} p-4 sm:p-8 md:p-12`}
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Hello Again!</h4>
            <span className="py-4 text-lg text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-4">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
