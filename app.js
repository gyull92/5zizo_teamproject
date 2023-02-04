const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", router);

app.listen(port, () => {
    console.log(port, "start");
})

module.exports = app;