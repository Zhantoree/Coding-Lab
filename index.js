const express = require("express");
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT; //process.env.PORT
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const path = require("path");
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    () => console.log('connected to DB')
);


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.use(express.static('routes'));
app.use(express.static('images'));

app.use(express.static('styles'));
app.use('/css', express.static(process.cwd()+"/styles"));
app.use('/routes', express.static(process.cwd()+"/routes"));
app.use('/images', express.static(process.cwd()+"/images"));
app.use('/', express.static(process.cwd()));

// app.use("/", require("./routes/index"));
app.use("/about", require("./routes/about"));


app.set('views', './views');
app.set('view engine', 'ejs');


app.get('',(req,res)=>{
    res.render('index')
});

app.get('/index',(req,res)=>{
    res.render('index')
});

app.get('/about_html_1',(req,res)=>{
    res.render('about_html_1')
});

app.get('/about_html_2',(req,res)=>{
    res.render('about_html_2')
});

app.get('/sign_in',(req,res)=>{
    res.render('sign_in')
});

app.get('/sign_up',(req,res)=>{
    res.render('sign_up')
});

app.get('/auth',(req,res)=>{
    res.render('auth')
});
app.listen(PORT, () => console.log("Server up "));