import nodemailer from 'nodemailer'
import config from './index.js';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.mailer.email, // generated ethereal user
      pass: config.mailer.password, // generated ethereal password
    },
  });

transporter.verify().then(()=>{
    console.log('Ready for send emails')
})

export {transporter}