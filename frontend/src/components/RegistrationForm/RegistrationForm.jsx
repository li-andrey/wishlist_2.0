import { Formik, Field, Form, FormikHelpers } from "formik";
import styles from "./RegistrationForm.module.scss";
import * as Yup from "yup";

const RegistrationForm = ({ isOpen, setIsOpen, handleRegister }) => {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email должен быть в формате example@example.domain")
      .required("Обязательное поле"),
    password: Yup.string()
      .min(2, "Пароль должен быть больше 2 символов")
      .required("Обязательное поле"),
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
              {errors.email && touched.email ? errors.email : "Email"}
            </label>
            <Field
              className={styles.input}
              id="email"
              name="email"
              type="email"
            />
            <label className={styles.label} htmlFor="password">
              {errors.password && touched.password ? errors.password : "Пароль"}
            </label>
            <Field className={styles.input} id="password" name="password" />
            <div className={styles.btnBlock}>
              {(errors.email && touched.email) ||
              (errors.password && touched.password) ? (
                <button
                  className={`${styles.btn} ${styles.btnError}`}
                  type="submit"
                  disabled
                >
                  Зарегистрироваться
                </button>
              ) : (
                <button className={styles.btn} type="submit">
                  Зарегистрироваться
                </button>
              )}

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
