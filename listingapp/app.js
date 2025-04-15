const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 5000;

const Place = require("./models/place");

//conect to mongoDB

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`app listen http://127.0.0.1:${port}`);
});
