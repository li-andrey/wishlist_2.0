const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

// Получение списка всех пользователей
const getUsers = async (_req, res) => {
  const users = await User.find({});
  res.json(users);
};

// Регистрация пользователя
const registration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
        message: "Некорректные данные при регистраци",
      });
    }
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.json({ message: "Такой пользователь уже существует" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ userId: user._id }, JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    await user.save();
    res.json({ user, token, message: "Пользователь создан" });
  } catch (error) {
    res.json({ message: "Что-то пошло не так" });
  }
};

// Вход в систему
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
        message: "Некорректные данные при регистраци",
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Неверный пароль, попробуйте снова" });
    }
    const token = jwt.sign({ userId: user.id }, JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user.id, message: "Пользователь в сети" });
  } catch (error) {
    res.json({ message: "Что-то пошло не так" });
  }
};

module.exports = { getUsers, registration, login };
