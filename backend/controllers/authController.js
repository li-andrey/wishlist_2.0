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
    console.log("Body:", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при регистраци",
      });
    }
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "Пользователь создан" });
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

// Вход в систему
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при регистраци",
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Неверный пароль, попробуйте снова" });
    }
    const token = jwt.sign({ userId: user.id }, JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user.id, message: "Пользователь в сети" });
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = { getUsers, registration, login };
