var express = require('express')
var app = express()
var evaluate = require('./isolated')

app.get('/', (req, res) => {
    
    res.send('Hola!')
    res.end()
})

app.get('/:exp', (req, res) => {
  res.send(evaluate(req.params.exp))
  res.end()
})

var port = (process.env.PORT || '3000')

app.listen(port, () => {
  console.log('App listening into port:', port)
})