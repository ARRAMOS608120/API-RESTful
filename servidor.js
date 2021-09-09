const express = require('express')

const app = express()

app.use(express.static('public'))

const router = require('./rutas.js')

/* ------------------------------------------------------ */
/* Cargo los routers */

app.use('/api/productos',router)
app.use('/api/productos/:id',router)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

