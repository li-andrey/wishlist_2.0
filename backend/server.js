const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRouter = require("./router/authRouter");
const wishlistsRouter = require("./router/wishlistsRouter");
const wishlistItemsRouter = require("./router/wishlistItemsRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", authRouter);
app.use("/api/wishlists", wishlistsRouter);
app.use("/api", wishlistItemsRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3100;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

// app.get("/how_it_works", function (req, res) {
//   res.sendFile(path.join(__dirname + "/build/index.html"));
// });

// app.get("/wishlists", function (req, res) {
//   res.sendFile(path.join(__dirname + "/build/index.html"));
// });

// app.get("/wishlists/:wish_list_id", function (req, res) {
//   res.sendFile(path.join(__dirname + "/build/index.html"));
// });

// app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});