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
  const { User } = req.body;
  const e = User.map(({ email }) => {
    return email;
  });
  console.log(e);
  var maillist = e;

  const mailData = {
    from: "",
    subject: "Event",
    to: maillist,
    text: "message",
    html: `<b>"New event has been added , please check your calendar! thank you!<b>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
