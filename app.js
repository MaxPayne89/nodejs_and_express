const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())
app.use('/static', express.static('public'))
app.set('view engine', 'pug');

const routes = require('./routes')
app.use(routes)

app.listen(3000, () => {
    console.log('the app is running on localhost:3000');
})