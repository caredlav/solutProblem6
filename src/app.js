const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;
const homeRoute = require("./routes/index.routes");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", homeRoute);

app.listen(port, () => console.log(`Ejecutando servidor en puerto: ${port}`));