const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'godwillkouadio@barco-ci.com',
    pass: 'Acer123456@'
  }
});

const mailOptions = {
  from: 'godwillkouadio@barco-ci.com',
  to: 'kouadiogodwill@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Ceci est un e-mail envoyé depuis Node.js avec Nodemailer !'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur : ' + error);
  } else {
    console.log('E-mail envoyé : ' + info.response);
  }
});
