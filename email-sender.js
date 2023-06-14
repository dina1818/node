const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'email@example.com',
    pass: 'email-password'
  }
});

const mailOptions = {
  from: 'email@example.com',
  to: 'email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent:', info.response);
  }
});
