//Import ExpressJS Module
const express = require('express');

const app = express()

app.set("view engine", "ejs")

//Start HTTP Listen Server
app.listen(8000)
