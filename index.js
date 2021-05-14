const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const express = require("express");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  res.render("record");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post("/", function (req, res) {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;

  const mailOptions = {
    to: "juliana.priroda@gmail.com",
    subject: "Регистрация на мероприятие участника",
    html: `<p>Имя: ${name}</p>
    <p>Телефонный номер: ${phone}</p> 
    <p>Почта: ${email}
    `
  };

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log("Ошибка отправки данных на почту. Свяжитесь с администратором сайта.");
    }
  });

  res.redirect("/success");
});

app.get("/success", function (req, res) {
  res.render("success");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});