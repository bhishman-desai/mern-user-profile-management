import toast from "react-hot-toast";

/* Validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  if (values.username) {
    /* TODO: Check if the user exist or not */
  }

  return errors;
}

/* Validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/* Validate Reset Password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Passwords do not match!");
  }

  return errors;
}

/* Validate Register Form */
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/* Validate Profile Page */
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}

/** Helper functions */

/* Validate Password */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const number = /[0-9]/;

  if (!values.password) {
    errors.password = toast.error("Password Required!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid Password!");
  } else if (values.password.length < 8) {
    errors.password = toast.error(
      "Password must be at least 8 characters long!",
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character!");
  } else if (!lowerCase.test(values.password)) {
    errors.password = toast.error("Password must contain a lowercase letter!");
  } else if (!upperCase.test(values.password)) {
    errors.password = toast.error("Password must contain an uppercase letter!");
  } else if (!number.test(values.password)) {
    errors.password = toast.error("Password must contain a number!");
  }

  return errors;
}

/* Validate Username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username!");
  }

  return error;
}

/* Validate Email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address!");
  }

  return error;
}
