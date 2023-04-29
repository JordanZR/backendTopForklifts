var app = require('../index')

const clienteCtrl = require('../controllers/clienteController')

app.get('/cliente', clienteCtrl.getClientes)
app.post('/cliente', clienteCtrl.postCliente)
app.delete('/cliente', clienteCtrl.deleteCliente)