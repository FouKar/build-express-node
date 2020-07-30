const express = require("express");
const app = express();
const path = require("path");

//Convention that express servers listen on port 3000
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./provided/static/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} `);
});
