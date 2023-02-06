const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes')
const express_render = require('./renders');

app.set('view engine', 'ejs');
app.set('views', 'views'); // view engine 설정

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

require("dotenv").config();

app.use('/', router);
app.use('/', express_render);

app.listen(process.env.PORT, () => {
    console.log(`http://127.0.0.1:${process.env.PORT}`);
});

module.exports = app;