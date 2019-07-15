const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    if (req.method !== 'POST') {
      return res.status(401).send({
        message: 'Not allowed'
      })
    }

    const formData = JSON.parse(req.body);
    console.log(formData);

    const mailOptions = {
      from: 'Eduardo Portet <eportet@bu.edu>',
      to: 'marylf@bu.edu',
      subject: 'Contact Info from Website',
      html: `<p>Name: ${formData.fName} ${formData.lName}</p>
            <p>Email: ${formData.email}</p>
            <p>Message: ${formData.message}</p>
          `
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sent');
    });
  });
});