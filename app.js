const express = require('express')
const app = express()
const port = 5000

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));

//Routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)

//Listen on Port
app.listen(port, () => console.log(`listening on port ${port}`))



//API KEY : d9cd719c6bb2436891e1915cef8f7545