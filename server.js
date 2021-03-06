const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const route = require('./route')

module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use('/', route)
