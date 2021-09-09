const express = require('express')
const { Router } = express

const Contenedor =  require('./contenedor.js')
const contenedor = new Contenedor ()

/* ------------------------------------------------------ */
/* Productos */

const routerProductos = new Router()
routerProductos.use(express.json())
routerProductos.use(express.urlencoded({ extended: true }))


routerProductos.get('/', (req, res) => {
    res.json(contenedor.getAll())
})

routerProductos.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(contenedor.getByID(id))
})

routerProductos.post('/', (req, res) => {
    res.json(contenedor.save(req.body))
})

routerProductos.put('/:id', (req, res) => {
    const producto = req.body
    const id = parseInt(req.params.id)
    const listaProd = contenedor.getAll()
    const indice = listaProd.findIndex(product=> product.id == id)
    contenedor.listaProductos[indice].Title = producto.Title
    contenedor.listaProductos[indice].Price= producto.Price
    contenedor.listaProductos[indice].thumbail= producto.thumbail
    res.json(contenedor.getByID(id))
})

routerProductos.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(contenedor.deleteById(id))
})

module.exports = routerProductos 
