let express = require('express')
let router = express.Router()

let messages = [
  {
    text: "Hola!",
    user: "Palfer",
    added: new Date()
  },
  {
    text: "eh?",
    user: "Bren",
    added: new Date()
  }
]

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'MSG BRD',
    messages: messages,
  })
})

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })

  res.redirect('/')
})
module.exports = router
