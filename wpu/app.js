const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts)

app.get("/", (req, res) => {
  const barang = [
    {
      nama: "minyak goreng",
      qty: "25",
      harga: 25000
    },
    {
      nama: "sabun cuci piring",
      qty: 20,
      harga: 250000
    },
    {
      nama: "mie goreng",
      qty: "1 dus",
      harga: 45000
    },
  ];

  res.render("index", { 
    nama: "Rizky Sandy", 
    title: "Halaman Home",
    barang,
   });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {title:"Halaman About"});
});

app.get("/contact", (req, res) => {
  // res.sendFile("./contact.html", { root: __dirname });
  res.render("contact", {title:"Halaman Contact"});
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
