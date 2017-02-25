var express = require('express')
var app = express()

app.get('/', (req, res) => {
    
    res.send('Hola!')
    res.end()
})

app.get('/:exp', (req, res) => {
  try {
    let result = eval(req.params.exp)
    res.send(result.toString())
  } catch(ex) {
    res.send(ex.toString())
  }
  res.end()
})

var port = (process.env.PORT || '3000')

app.listen(port, () => {
  console.log('App listening into port:', port)
})