const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config;

const DB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nature-test";
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("successfully to database");
  })
  .catch((err) => {
    console.log("could not connect to database,Error", err);
    process.exit();
  });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});
require("./routes/app.routes.js")(app);
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
