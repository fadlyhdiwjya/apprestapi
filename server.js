//  import module express
const express = require('express');
// import module body-parser
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express()
const Port = 8000;


// parse application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./Routes/v1');
routes(app);


app.listen(Port, () => {
    console.log(`Server started on port ${Port}`);
});
