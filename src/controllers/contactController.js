 const nodemailer = require('nodemailer');

module.exports = {
  create(req, res, next){
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at cropdoc.com',
    text: `${req.body.name} (${req.body.email}) (${req.body.phone}) says: ${req.body.content}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    console.log('sendmail');
    if (error) {
      console.log('contact-failure');
    }
    else {
      console.log('contact-success');
    }
  });
}
}
