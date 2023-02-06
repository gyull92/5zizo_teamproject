const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes");
const render = require("./render");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use("/api", router);
app.use("/", render);
app.use(express.static('views'));
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./views")));
// app.set("views", __dirname + "/views");
// app.use(express.static(__dirname + "/views"));

app.listen(port, () => {
    console.log(port, "start");
});

module.exports = app;