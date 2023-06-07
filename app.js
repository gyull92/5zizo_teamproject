const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes");
const render = require("./render");
const path = require('path');
const dotenv    = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

dotenv.config(); 

// ----------------------------------------- connect routes ----------------------------------------
const authRouter  = require('./routes/auth.router');
const pageRouter  = require('./routes/pages.router');
const adminRouter = require('./routes/admin.router');
const cartRouter  = require('./routes/cart.router');
const passportConfig = require('./controllers/passport');

// -------------------------------------------------------------------------------------------------
passportConfig(); // passport 설정
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'views');    // view engine 설정
// -------------------------------------------------------------------------------------------------
sequelize.sync({ force: false })
    .then ((   ) => { console.log('데이터베이스 연결 성공'); })
    .catch((err) => { console.log(err); });

app.use(morgan('dev')); 
app.use(express.static('views'));
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./views")));

sequelize.sync({ force: false })
    .then ((   ) => { console.log('데이터베이스 연결 성공'); })
    .catch((err) => { console.log(err); });

app.listen(port, () => {
    console.log(port, "start");
});

module.exports = app;