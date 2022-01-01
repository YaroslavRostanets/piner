const express = require('express')
const app = express()
const {startAction} = require('./actions')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let timeout = 0

const fn = () => {
  setTimeout(() => {
    timeout = getRandomArbitrary(60, 120) * 1000
    startAction();
    fn()
  }, timeout)
}

// fn()
 

app.listen(5000)