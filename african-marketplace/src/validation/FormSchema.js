import * as yup from "yup";

// object must have:
// -name: required, string
// -category: required, string, max 50 chars
// -description: required, string, max 150 chars
// -price: required, non-zero, integer
// -location_id: required, non-zero, integer (points to a preset database table, value must be 1 through 6)

const FormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  category: yup
    .string()
    .required("Category is required")
    .max(50, "category should not be more than 50 characters"),
  description: yup
    .string()
    .required("A description about the product is required")
    .max(150, "Max 150 characters"),
  price: yup
    .number()
    .required("Price is required")
    .min(1, "Price must be greater than zero"),
  location_id: yup
    .number()
    .nullable()
    .required("Location is required")
    .min(1, "Value must be 1 through 6")
    .max(6, "Value must be 1 through 6"),
});

export default FormSchema;
