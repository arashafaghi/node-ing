var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'afaghi@gmail.com',
    pass: 'Furopet834ekoDdiablo'
  }
});

var mailOptions = {
  from: 'afaghi@gmail.com',
  to: 'arash.afaghi@vsaf.nu',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//works! turn on "Åtkomst för mindre säkra appar" from account settings 
