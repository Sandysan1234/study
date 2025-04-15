const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  
  // res.render("./index.html", { root: __dirname });
  res.render("index", { nama: "Rizky Sandy", title :'Halaman Home' });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.sendFile("./contact.html", { root: __dirname });
  res.render("contact");
});

app.get("/produk/:id", (req, res) => {
  res.send(`product id : ${req.params.id} <br> category : ${req.query.cat}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>halaman tidak ditemukan</h1>");
});

app.listen(port, () => {
  console.log(`app listen http://localhost:${port}`);
});
