const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts)

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Rizky Rahmahdian Sandy",
      position: "25",
      office: 25000,
      age: 32,
      startdate: 3000000,
    },
    {
      nama: "sabun cuci piring",
      position: "25",
      office: 25000,
      age: 32,
      startdate: '2002/09/20',
    },
    {
      nama: "mie goreng",
      position: "25",
      office: 25000,
      age: 32,
      startdate: '2002/09/20',
    },
  ];

  res.render("index", { 
    nama: "Rizky Sandy", 
    title: "Halaman Home",
    mahasiswa,
    layout: 'layouts/main-layout'
   });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: 'layouts/main-layout',
    title:"Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: 'layouts/main-layout',
    title:"Halaman Contact"});
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
