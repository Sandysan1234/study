const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about/:cat", (req, res) => {
  const { cat } = req.params;
  res.send(`halaman about! ${cat}`);
});
// route params start
app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;

  res.send(
    `blog ini memiliki category : ${category}, author ${author} adalah ${judul}`
  );
});
// route params end
//route query start
app.get("/about/:cat", (req, res) => {
  const { cat } = req.params;
  res.send(`halaman about! ${cat}`);
});
//route query end
app.get("/user", (req, res) => {
  const { q } = req.query;
  res.send(`halo ${q}`);
  console.log({ q });
});

app.listen(port, () => {
  console.log(`app listen http://localhost:${port}`);
});
