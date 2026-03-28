const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Dockerized App!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
