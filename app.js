const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')

const app = express()
//const port = 3000

//views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', indexRouter)
app.use('/new', newRouter)

//app.listen(port, () => console.log(`We listening at ${port}!`))

module.exports = app
