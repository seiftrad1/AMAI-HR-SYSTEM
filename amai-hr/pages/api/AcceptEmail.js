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
  const { name, email, password } = req.body;

  const mailData = {
    from: "",
    to: email,
    subject: "Welcome to team",
    html: `Hi  <b>${name}</b>,<br>
   Welcome to AMAI! We're excited that you're joining our team!<br>
   You should have received an invitation to your AMAI Office 365 email account (cc'd here); please let me know if that is not the case.<br>
   As soon as you followed the instructions in the mail, be sure to use http://outlook.office.com/ to check your mails and notify me in Microsoft Teams, that you are online.<br>
   Everything you need to get started is listed in your onboarding issue in our plateform. Make sure that your GitLab.com profile includes your first and last name (e.g. first.lastname if this is taken please use first.lastname_amai) so email notifications arrive correctly.<br>, please be sure to complete all the "Before Starting at AMAI" tasks assigned to you (i.e., "New Team Member") in your onboarding issue. In particular, make sure you set up your LastPass account before logging into any other services or tools. This will save you a lot of time later!
   Feel free to reach out to me if you have any questions or need help!<br> 
   please use this credentials to login to our internal plateform <br>
   Username: ${email} <br> Password:${password}<br>
   please feel free to change your password in your account settings. <br>
   Best,`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
