var app = require('../index')

const clienteCtrl = require('../controllers/clienteController')

app.get('/clientes', clienteCtrl.getClientes)
app.get('/cliente', clienteCtrl.getCliente)
app.post('/cliente', clienteCtrl.postCliente)
app.delete('/cliente', clienteCtrl.deleteCliente)