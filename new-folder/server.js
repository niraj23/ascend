const express = require("express");
const bodyParser = require("body-parser");
const addressRoutes = require("./src/addresses/routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/addresses", addressRoutes);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
