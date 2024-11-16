import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {htmlContent: `<h1> Enter your name below 👇 </h1>`});
});

app.post("/submit", (req, res) => {
  const x = req.body["fName"].length + req.body["lName"].length;
  console.log(x);
  res.render("index.ejs", {htmlContent: `<h1> There are ${x} letters in your name</h1>`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
