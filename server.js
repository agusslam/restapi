const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse application
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server started on port`);
});
