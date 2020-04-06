const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static('public'))
app.set('view engine', 'pug');

const routes = require('./routes')
app.use(routes)

app.use((req, res, next) => {
    const err = new Error('Page not found')
    err.status = 404
    console.log(err.stack)
    console.log(err.message)
})

app.listen(3000, () => {
    console.log('the app is running on localhost:3000');
})