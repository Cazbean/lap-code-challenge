// Server
const express = require('express')
const app = express()
const port = 5000
const path = require('path');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


app.get('/coffee', (req, res) => {
  res.sendFile(path.join(__dirname, 'coffee.html'))
})

app.get('/tea', (req, res) => {
  res.sendFile(path.join(__dirname, '/tea.html'))
})

app.get('/hotchoc', (req, res) => {
  res.sendFile(path.join(__dirname, '/hot-choc.html'))
})

app.get('/chailatte', (req, res) => {
  res.sendFile(path.join(__dirname, '/chai-latte.html'))
})
