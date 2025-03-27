const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mahasiswa/:name", (req, res) => {
  res.send(`halo ${req.params.name}, category = ${req.query.c} `)
});

app.get("/user/:name?", (req, res) => {
  const name = req.params.name || 'stranger'
  res.send(`hello ${name}`)
  // res.send(`halo ${req.params.name}`)
});

app.get("/about", (req, res) => {
  res.send(`About Page`)
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});
 