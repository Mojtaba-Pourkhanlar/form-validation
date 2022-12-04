export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "Password need to be 6 characters or more";
  } else {
    delete errors.password;
  }

  if (type === "SignUp") {
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone required";
    } else if (data.phone.length !== 10) {
      errors.phone = "The number of characters must be 10";
    } else {
      delete errors.phone;
    }
    if (!data.password_confirmation) {
      errors.password_confirmation = "Confirm the Password";
    } else if (data.password_confirmation !== data.password) {
      errors.password_confirmation = "Password do not match";
    } else {
      delete errors.password_confirmation;
    }
    if (data.isAccepted) {
      delete data.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  return errors;
};
