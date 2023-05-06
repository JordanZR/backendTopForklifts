var app = require('../index')

const email = require('../controllers/emailController')

app.post('/email', email.send)