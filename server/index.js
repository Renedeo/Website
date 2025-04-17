const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(
  cors({
    methods: ["POST", "GET"],
    origin: "http://127.0.0.1:5500",
  })
);

app.use(express.json());

app.use(function (req, res, next) {
  console.log(req.method, "-", req.path, "-", req.ip, "-", req.headers.origin);
  next();
});

app.post("/", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hokecodjo@gmail.com",
      pass: "trfw fclf ykdz sjip",
    },
  });

  const mailOption = {
    from: "hokecodjo@gmail.com",
    to: "baullegafribreu-4572@yopmail.com",
    subject: "Contact me from brochure website",
    text: "This is a test from" + name,
    html: `\
    <h1> Message \</h1>\
    <p> ${message} </p>`,
  };
  transporter.sendMail(mailOption, (err, info) => {
    if (err) throw err;

    res.status(200).send("Email sent");
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
