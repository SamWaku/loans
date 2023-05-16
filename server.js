//importing modules
const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const exphbs = require("express-handlebars");
const ejs = require("ejs");
const path = require("path")

//addons
dotenv.config();

//application program begins here
const app = express();

//importing from the routes folder


//frontend declarations
const viewsrouter = require("./frontend/routes");


//setting up ejs view template and express Handlebars
app.use(express.static(path.join(__dirname, '/public' )))
app.use(express.static(path.join(__dirname, '/views' )))
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}), require('ejs').renderFile)
app.set("view engine", "hbs");
//app.set('views', path.join(__dirname + '/views'));

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    allowedHeaders: ['sessionId','Access-Control-Allow-Origin', 'Content-Type', 'master-token'],
    exposedHeaders: ['sessionId'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    }
))


//entrance
app.use('/', viewsrouter)
app.get('/', 
    (req,res) => {
        res.send("running")
    }
)


//consuming routes

//db connections
db1 = process.env.DB;

//connecting 
mongoose.set('strictQuery',false);
mongoose
        .connect(db1, {useUnifiedTopology:true, useNewUrlParser:true})
        .then(() => console.log("connected to db1"))
        .catch(err => console.log(err))


port = process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`Listening on ${port}`)
})
