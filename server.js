const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;
const root = __dirname;

app.use(express.static(root, { index: false, extensions: ["html"] }));

app.get("*", (req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.listen(port, () => {
  console.log(`yeahboy.app listening on ${port}`);
});
