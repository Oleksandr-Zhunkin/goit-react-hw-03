import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const ContactForm = ({ handleSubmit }) => {
  const phoneRegExp = /^[\d\(\)\-+]+$/m;
  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters!")
      .max(50, "Name must be less than 50 characters!")
      .matches(/^[A-Za-z]+$/, "Name must consist only of letters!")
      .required("Name is required!"),
    number: Yup.string()
      .min(7, "Name must be at least 7 characters!")
      .max(14, "Phone must be less than 14 characters!")
      .matches(phoneRegExp, "Phone number is not valid!")
      .required("Phone is required!"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
