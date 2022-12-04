const nodemailer = require("nodemailer");

module.exports = async ({ userName, userEmail, userText }) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.meta.ua",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "finanv@meta.ua", // generated ethereal user
        pass: "zazforza2013", // generated ethereal password
      },
    });
    const output = `Hello from ${userName}, contact email ${userEmail}. Message: ${userText}`;
    const options = {
      from: "finanv@meta.ua", // sender address
      to: "viktor.tytenko@gmail.com", // list of receivers
      subject: "Я зацікавився вашою пропозицією", // Subject line
      text: `${userText}`, // plain text body
      html: output, // html body
    };

    let info = await transporter.sendMail(options);

    console.log("Message sent: %s", info.messageId);

    return true;
  } catch (error) {
    console.log(error.message);
  }
};
