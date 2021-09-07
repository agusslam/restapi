const bodyParser = require('body-parser');
const express = require('express');
var morgan = require ('morgan');
const app = express();
var cors = require('cors');

//parse application
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Panggil routes
var routes = require('./routes');
routes(app);

//daftar menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3001, () => {
    console.log(`Server started on port`);
});
