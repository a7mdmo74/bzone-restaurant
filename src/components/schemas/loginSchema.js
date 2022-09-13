import * as yup from "yup";

const passwordRules = /^.{6,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, {
      message: "Please enter a valid password at least 6 characters",
    })
    .required("Please enter a stronger password"),
});
// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
