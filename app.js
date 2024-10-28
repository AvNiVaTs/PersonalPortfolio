const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  // Configure the email transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',  // use your email provider
    auth: {
      user: 'avnivts@gmail.com',
      pass: 'qavq ynuh wlld rrbw'
    }
  });

  // Email options
  let mailOptions = {
    from: 'avnivts@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, info });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});