import yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Name To short, must be 5 charchter long")
    .required("Enter your name"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("Enter your email address"),
  phone: yup
    .number()
    .typeError("Invalid Data, Must be a number")
    .required("Enter phone number"),
  gender: yup.string().required("Choose your gender"),
  hobbies: yup.string().required("Choose your hobbies"),
});

export const validaton = (Schema) => async (req, res, next) => {
  try {
    await Schema.validate(req.body);
    next();
  } catch (error) {
    console.log(error.errors);
    res.status(400).json(error.errors);
  }
};
