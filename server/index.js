const express = require("express");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(
  cors({
    methods: ["POST", "GET"],
    origin: ["https://www.analytics-insights.fr", "https://analytics-insights.fr/", "https://website-vcoy.vercel.app"],
  })
);

app.use(express.json());

app.use(function (req, res, next) {
  console.log(req.method, "-", req.path, "-", req.ip, "-", req.headers.origin);
  next();
});

app.get("/", (req, res) => {
  res.send("Node Mailer server");
});

app.post("/api/send", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hokecodjo@gmail.com",
      pass: "trfw fclf ykdz sjip",
    },
  });
  const mailOption = {
    from: `"Brochure Website" <no-reply@yourdomain.com>`,
    to: "baullegafribreu-4572@yopmail.com",
    subject: "[BROCHURE-WEBSITE] Contact me from brochure website",
    text: `Message from the Website contact form \n
          Here is a message from ${name}\n\n
          ----------------------------\n\n
          ${message}\n\n
          ----------------------------\n\n
          Contact (email): ${email}`,
    html: `Message from the Website contact form
        <br />  
        Here is a message from ${name}
          <br />
          <hr />
          <br />
          <p>${message}</p>
          <br />
          <hr />
          <br />
          Contact (email): ${email}`,
  };
  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      res.status(500).send("Email not sent")
      throw err
    };

    res.status(200).send("Email sent");
  });
});

console.log("Registered routes:");
console.table(listEndpoints(app));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
