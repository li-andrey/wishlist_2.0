import { Formik, Field, Form, FormikHelpers } from "formik";
import styles from "./RegistrationForm.module.scss";
import * as Yup from "yup";

const RegistrationForm = ({ isOpen, setIsOpen, handleRegister }) => {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  if (!isOpen) return null;
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values) => {
          await handleRegister(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.card}>
            <label className={styles.label} htmlFor="name">
              ФИО
            </label>
            <Field className={styles.input} id="name" name="name" />

            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <Field
              className={styles.input}
              id="email"
              name="email"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label className={styles.label} htmlFor="password">
              Пароль
            </label>
            <Field className={styles.input} id="password" name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <div className={styles.btnBlock}>
              <button className={styles.btn} type="submit">
                Зарегистрироваться
              </button>
              <button
                className={styles.btnCancel}
                onClick={() => setIsOpen(false)}
              >
                Отмена
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
