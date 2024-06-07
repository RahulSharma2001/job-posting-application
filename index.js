const express = require("express");
const mongoose = require("mongoose");
const routers = require("./routes/jobs");

mongoose
  .connect("mongodb://localhost:27017/jobs")
  .then(() => console.log("Database Connection Established"))
  .catch((e) => console.log("Error Occured", e));

const app = express();
app.use(express.json());
app.use(routers);

app.listen(5000, () =>
  console.log("Sever is Running and youre sitting, such a shame!!")
);
