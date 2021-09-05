const bodyParser = require('body-parser');
const express = require('express');
var morgan = require ('morgan');
const app = express();

//parse application
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

//Panggil routes
var routes = require('./routes');
routes(app);

//daftar menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});
