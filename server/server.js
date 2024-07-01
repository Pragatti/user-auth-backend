const express = require("express");
const bodyParser = require("body-parser");

const routes = express();

const jsonParser = bodyParser.json();

const port = 3000;

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.get("/login", jsonParser, (req, res) => {
  if (req) {
    console.log("🚀 ~ routes.get ~ req.body.:", req.body);
    return res.status(200).send({
      message: "user is valid",
    });
  } else {
    return res.status(404).send({
      message: "No name provided",
    });
  }
});

routes.listen(port, () => {
  console.log(`server is running on port ${port}`);
});