const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("API v1 ready to go");
});
app.post("/login", (req, res) => {
    console.log(req.body)
    res.send("login berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
