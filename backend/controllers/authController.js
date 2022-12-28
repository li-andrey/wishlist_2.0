const User = require("../models/User");
const authService = require("../services/authService");
const { validationResult } = require("express-validator");

class AuthController {
  // Получение списка всех пользователей
  async getUsers(_req, res) {
    const users = await User.find({});
    res.json(users);
  }

  // Регистрация пользователя
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({
          message: "Некорректные данные при регистраци",
          errors: errors.array(),
        });
      }
      const { name, email, password } = req.body;
      const userData = await authService.registration(name, email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (error) {
      return res.json({
        message: `Что-то пошло не так ${error}`,
      });
    }
  }

  // Вход в систему
  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({
          message: "Некорректные данные",
          errors: errors.array(),
        });
      }
      const { email, password } = req.body;
      const userData = await authService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (error) {
      return res.json({
        message: `Что-то пошло не так ${error}`,
      });
    }
  }

  // Выход из системы
  async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await authService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (error) {
      return res.json({
        message: `Что-то пошло не так ${error}`,
      });
    }
  }

  // Активация пользователя
  async activate(_req, res) {
    const users = await User.find({});
    res.json(users);
  }

  // Обновление токена
  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await authService.refresh(refreshToken);
      res.cookie("refreshToken", token.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(token);
    } catch (error) {
      return res.json({
        message: `Что-то пошло не так ${error}`,
      });
    }
  }
}

module.exports = new AuthController();
