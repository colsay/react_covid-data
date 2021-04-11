const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const CovidService = require('./CovidService')
const CovidRouter = require('./CovidRouter');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const covidservice = new CovidService();

app.use('', new CovidRouter(covidservice).router());


app.listen(8080, () => {
    console.log(`Application listening to port 8080`);
});