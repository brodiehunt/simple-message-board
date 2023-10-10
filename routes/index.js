const express = require('express');
const router = express.Router()
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
// index or homepage route
router.get('/', (req,res) => {
  res.render('home',{messages: messages} );
})

router.get('/new', (req, res) => {
  res.render('form');
})

router.post('/new', (req, res) => {
  const {user, text} = req.body;
  messages.push({text, user, added: new Date()})
  console.log(messages);

  res.redirect("/index");
})




module.exports = router;