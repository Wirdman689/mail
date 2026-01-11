const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure:true, // Use true for port 465, false for port 587
  auth: {
    user: "augustelisbonne@gmail.com",
    pass: "lgzk ofwn smyt fifg",
  },
});

// Send an email using async/await
const mailOptions = {
from:"lisbonneauguste4@gmail.com",
  to: "augustelisbonne@gmail.com",
  subject: 'Envoyer un Email en utilisant Node.js',
  text: 'comment allez vous?'
};

// Envoyer l'email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(`Erreur :`, error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
});