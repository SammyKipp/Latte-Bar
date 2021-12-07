//Import ExpressJS Module
const express = require('express');

const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.redirect('login')
});

app.get('/menu', (req, res) => {
  res.render('menu')
});

app.get('/cart', (req, res) => {
  res.render('cart')
});

app.get('/login', (req, res) => {
  res.render('login')
});

app.get('/orders', (req, res) => {
  res.render('orders')
})
//Start HTTP Listen Server
app.listen(8000)
