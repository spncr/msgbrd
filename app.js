const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')

const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

//views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


//routes
app.use('/', indexRouter)
app.use('/new', newRouter)

app.listen(port, () => {
  console.log(`We listening at ${port}!`)
})

module.exports = app
