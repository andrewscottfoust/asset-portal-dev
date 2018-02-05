"use strict";
const nodemailer = require("nodemailer");

module.exports = function(app, User, auth) {
  app.post("/api/send_reset_password_link", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        res.statusMessage =
          "No user with that email. Please enter a valid email address.";
        res.status(400).end();
        return res;
      } else {
        sendResetPasswordLinkEmail(req.body.email);
        return res
          .status(200)
          .json({ message: "An email has been sent to reset your password." });
      }
    });
  });

  function sendResetPasswordLinkEmail(email) {

    //to do
    // generate reset password link for email


    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });

      let mailOptions = {
        from: '"Onnx" <admin@onnx.com>',
        to: email,
        subject: "Password Reset",
        text: "Click the link below to reset your password.",
        html: '<a href="#">reset password</a>'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
    });
  }
};
