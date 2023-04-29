var app = require('../index')

const usuarioCtrl = require('../controllers/userController')

app.get('/usuario', usuarioCtrl.getUsuarios)
app.post('/usuario', usuarioCtrl.postUsuario)
app.put('/usuario', usuarioCtrl.updateUsuario)
app.delete('/usuario', usuarioCtrl.deleteUsuario)