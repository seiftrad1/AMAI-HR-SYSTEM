export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: process.env.password,
    },
    secure: true,
  });
  const { email, name, password } = req.body;

  const mailData = {
    from: "",
    to: email,
    subject: "Amai Account",
    name,
    text: "message",
    html: `Hello ${name} we are excited that you joined our team <br>
    please use this credentials to login to our internal plateform <br>
 Username: ${email} <br> Password:${password}<br>
 please feel free to change your password in your account settings. <br>
 Greetings.`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
