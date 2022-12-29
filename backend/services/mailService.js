const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });
  }

  async sendWelcomeMail(to, password) {
    await this.transporter.sendMail({
      from: `Wishlist 2.0 <${process.env.SMTP_USER}>`,
      to,
      subject:
        "Поздравляем! Вы успешно зарегистрировались на сайте " +
        process.env.API_URL,
      text: "",
      html: `
      <div>
        <h1>Добро пожаловать на сервис Wishlist 2.0</h1>
        <ul>
          <li> Вош логин: ${to}</li>
          <li> Вош пароль: ${password}</li>
        </ul>>
      </div>`,
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: `Wishlist 2.0 <${process.env.SMTP_USER}>`,
      to,
      subject: "Активация аккаунта на сайте " + process.env.API_URL,
      text: "",
      html: `
      <div>
        <h1>Для активации аккаунта перейдите по ссылке</h1>
        <a href="${link}">${link}</a>
      </div>`,
    });
  }
}
module.exports = new MailService();
