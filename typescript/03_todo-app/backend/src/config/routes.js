const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('api', router) //todas as vezes que foram usadas o server.use, quer dizer que estou criando um midware.

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}