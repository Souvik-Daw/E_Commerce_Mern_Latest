const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: "fergus.core.development@gmail.com",
      pass: "Ssouvik@2000",
    },
  });
  //console.log(" inside email send function 1")
  const mailOptions = {
    from: "fergus.core.development@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //console.log(" inside email send function 2")
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
