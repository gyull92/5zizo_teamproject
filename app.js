const express   = require('express');
const morgan    = require('morgan');
const path      = require('path')
const dotenv    = require('dotenv');
const { sequelize } = require('./models'); // DB

dotenv.config();

// connect routes
// const pageRouter     = require('./routes/pages');

// -------------------------------------------------------------------------------------------------
const app = express();
app.set('port', process.env.PORT);

// -------------------------------------------------------------------------------------------------
sequelize.sync({ force: false })
    .then ((   ) => { console.log('데이터베이스 연결 성공'); })
    .catch((err) => { console.log(err); });
// -------------------------------------------------------------------------------------------------

app.use(morgan('dev'));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ------------------------------------------ routes -----------------------------------------------
// app.use('/', pageRouter);

// ------------------------------------------ port -------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
});