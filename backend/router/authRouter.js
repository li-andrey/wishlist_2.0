const Router = require("express").Router;
const { check } = require("express-validator");
const {
  getUsers,
  registration,
  login,
} = require("../controllers/authController");

const router = new Router();

router.get("/users", getUsers);

router.post(
  "/registration",
  [check("email", "Некорректный email").isEmail()],
  registration
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").isEmail().normalizeEmail(),
    check("password", "Введите пароль").exists(),
  ],
  login
);

module.exports = router;
