import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

async function postRegister({ ...form }) {
  // Default options are marked with *
  const data = { ...form };
  const url = '/api/registration';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function postLogin({ ...form }) {
  // Default options are marked with *
  const data = { ...form };
  const url = '/api/login';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log('3333333333333', response);

  return response.json(); // parses JSON response into native JavaScript objects
}

export default function PageAuth() {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  console.log(form);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegister = () => {
    const register = postRegister({ ...form });
    console.log(register);
    window.alert('Пользователь зарегистрирован, нажмите кнопку "Войти"');
  };

  const handleLogin = async () => {
    const data = await postLogin({ ...form });

    auth.login(data.token, data.userId);
  };

  const handleTest = () => {
    setForm({ ...form });
  };

  return (
    <React.Fragment>
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
            {' '}
            Войти{' '}
          </button>
          <button className="btn-auth-2" onClick={handleRegister}>
            {' '}
            Регистрация{' '}
          </button>
          <button className="btn-auth-2" onClick={handleTest}>
            {' '}
            Гостевой вход{' '}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
