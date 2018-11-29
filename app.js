var express = require ('express')
var router = express.Router();
var app = express();

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index');
});

//Static File
app.use('/',router)
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(3000, ()=>{
    console.log("Server on Port ", app.get('port'))
})