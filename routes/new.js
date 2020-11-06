let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
  res.render('form', {
    title: 'Posting'
  })
})

router.post('/', (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
})

module.exports = router
