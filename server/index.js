import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';

const { urlencoded, json } = bodyParser;

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.use(cors());

app.post('/send-email', (req, res) => {
    const { firstname, lastname, email, subject, text } = req.body;

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: `This is ${firstname} ${lastname},\n\n${text}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
