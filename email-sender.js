const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kouadiogodwill@gmail.com',
    pass: 'kbyp angn jbmo zjog'
  }
});

const mailOptions = {
  from: 'kouadiogodwill@gmail.com',
  to: 'godwillkouadio@barco-ci.com',
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
