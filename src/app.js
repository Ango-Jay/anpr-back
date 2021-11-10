const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/api"));
app.get("/", (req, res) => {
  res.redirect("/api/");
});

const mongoDB = process.env.mongoDB;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  UseUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", (error) => {
  if (error) throw error;
});

app.listen(PORT);
