const User = require("../models/User");
const bcrypt = require("bcryptjs");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");

class AuthService {
  async registration(name, email, password) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      return { message: "Такой пользователь уже существует" };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    // const activationLink = "some-link-to-register";
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      // activationLink,
    });

    // Отправка упрощенного welcomeисьма с логином и паролем
    await mailService.sendWelcomeMail(email, password);

    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}api/activate/${activationLink}`
    // );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto._id, tokens.refreshToken);
    return { user: userDto, ...tokens, message: "Пользователь создан" };
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      return { message: "Пользователь не найден" };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { message: "Неверный пароль, попробуйте снова" };
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto._id, tokens.refreshToken);
    return { user: userDto, ...tokens, message: "Вы вошли" };
  }

  async logout(refreshToken) {
    const token = await tokenService.deleteToken(refreshToken);
    return token;
  }

  // async activate(activationLink) {
  //   const user = await User.findOne({ activationLink });
  //   if (!user) {
  //     return { message: "Некорректная ссылка" };
  //   }
  //   user.isActivated = true;
  //   await user.save();
  //   return user;
  // }

  async refresh(refreshToken) {
    if (!refreshToken) {
      return { message: "Пользователь не авторизирован" };
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      return { message: "Пользователь не авторизирован" };
    }
    const user = await User.findOne({ email: userData.email });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto._id, tokens.refreshToken);
    return { user: userDto, ...tokens };
  }
}

module.exports = new AuthService();
