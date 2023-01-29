const Router = require("express").Router;
const { check } = require("express-validator");
const authController = require("../controllers/authController");

const router = new Router();

router.get("/users", authController.getUsers);

router.post(
  "/registration",
  [check("email", "Некорректный email").isEmail()],
  authController.registration
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").isEmail().normalizeEmail(),
    check("password", "Введите пароль").exists(),
  ],
  authController.login
);
router.post("/logout", authController.logout);
router.get("/activate/:link", authController.activate);
router.get("/refresh", authController.refresh);

module.exports = router;
