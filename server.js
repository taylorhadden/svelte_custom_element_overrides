let rollup = require('rollup')
let config = require('./rollup.config')

rollup.watch(config)

let express = require('express')

let app = express()
let port = 4001

app.use('/', express.static('public'))
app.use('/', express.static('__build__'))

app.listen(port)

console.log('')
console.log("######################################")
console.log(`# Listening at http://localhost:${port} #`)
console.log("######################################")
console.log('')
