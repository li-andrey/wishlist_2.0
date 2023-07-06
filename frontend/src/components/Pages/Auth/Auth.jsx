import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../UI/Button/Button";
import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";
import Input from "../../UI/Input/Input";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import styles from "./Auth.module.scss";

// interface Values {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { status } = useSelector((state) => state.auth);
  const { checkIsAuth } = useSelector((state) => state.auth);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (checkIsAuth) navigate("/");
  }, [status, checkIsAuth]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegister = (values) => {
    dispatch(registerUser(values));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...form }));
  };

  const handleTest = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Авторизация</h1>
        <RegistrationForm
          handleRegister={handleRegister}
          isOpen={openRegistrationForm}
          setIsOpen={setOpenRegistrationForm}
        />
        <form className="form">
          <div className={styles.rows}>
            <Input
              placeholder="Введите ФИО"
              onChange={changeHandler}
              label="ФИО"
              name="name"
            />
          </div>
          <div className={styles.rows}>
            <Input
              placeholder="Введите email"
              value={form.email}
              onChange={changeHandler}
              label="Email"
              name="email"
            />
          </div>
          <div className={styles.rows}>
            <Input
              placeholder="Введите пароль"
              value={form.password}
              onChange={changeHandler}
              label="Пароль"
              name="password"
            />
          </div>
          <div className={styles.btnBlock}>
            <Button onClick={handleLogin}>Войти</Button>
            <div className={styles.btnBlockSecondary}>
              <ButtonSecondary
                onClick={(e) => {
                  e.preventDefault();
                  setOpenRegistrationForm(true);
                }}
              >
                Еще нет аккаунта?
              </ButtonSecondary>
              <ButtonSecondary onClick={handleTest}>
                Гостевой вход
              </ButtonSecondary>
            </div>
          </div>
        </form>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Auth;
