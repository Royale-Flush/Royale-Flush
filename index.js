const client = require('./db/client')
const express = require('express')
const server = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 4000

server.use(cors())
// create logs for everything
server.use(morgan('dev'))

server.use(express.json())

server.use(express.static(path.join(__dirname, 'build')))

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
  next()
})

server.use('/api', require('./api'))

// define a server handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`)

  try {
    client.connect()
    console.log('Database is open for business!')
  } catch (error) {
    console.error('Database is closed for repairs!\n', error)
  }
})

module.exports = { server, handle }
