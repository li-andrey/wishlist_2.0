import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PageAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { status } = useSelector((state) => state.auth);
  const { checkIsAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (checkIsAuth) navigate("/");
  }, [status, checkIsAuth]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ ...form }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...form }));
  };

  const handleTest = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="h1-auth"> Авторизация </h1>
      <form className="form">
        <div className="row">
          <input
            className="inputAuth"
            placeholder="Введите ФИО"
            id="name"
            type="text"
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="row">
          <input
            className="inputAuth"
            placeholder="Введите email"
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
        </div>
        <div className="row">
          <input
            className="inputAuth"
            placeholder="Введите пароль"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <div className="btn-row">
          <button className="btn-auth-1" onClick={handleLogin}>
            Войти
          </button>
          <button className="btn-auth-2" onClick={handleRegister}>
            Регистрация
          </button>
          <button className="btn-auth-2" onClick={handleTest}>
            Гостевой вход
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}
