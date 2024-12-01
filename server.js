const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/nature-test", {
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
let PORT = 8081;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
