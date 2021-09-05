const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse application
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
