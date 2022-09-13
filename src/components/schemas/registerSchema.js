import * as yup from "yup";

const passwordRules = /^.{6,}$/;

export const registerSchema = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords isn't matches")
    .required("Please confirm password"),
});
// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
