const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('styles'))
app.use('/css', express.static(process.cwd()+"/styles"))
app.use('/routes', express.static(process.cwd()+"/routes"))
app.use('/img', express.static(process.cwd()+"/img"))
app.use('/', express.static(process.cwd()))

app.use("/", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.use("/profile", require("./routes/profile"));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/auth',(req,res)=>{
    res.render('auth')
})