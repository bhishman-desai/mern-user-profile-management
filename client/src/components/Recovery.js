import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Username.module.css";

export default function Recovery() {
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    window.alert("Update Success!");
    navigate("/reset");
  }

  function resendOTP() {
    // TODO: Implement resend OTP logic
  }

  return (
    <div className="container mx-auto px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center min-h-screen">
        <div className={`${styles.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl sm:text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-lg sm:text-xl w-full text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>

          <form className="py-4 sm:py-20" onSubmit={onSubmit}>
            <div className="textbox flex flex-col items-center gap-4 sm:gap-6">
              <input
                onChange={(e) => setOTP(e.target.value)}
                className={`${styles.textbox} w-full`}
                type="text"
                placeholder="OTP"
              />
              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>
          </form>
          <div className="text-center py-4">
            <span className="text-gray-500">
              Can't get OTP?{" "}
              <button onClick={resendOTP} className="text-red-500">
                Resend
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
