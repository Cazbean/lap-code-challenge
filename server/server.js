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
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.get('/coffee', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/coffee.html'))
})

app.get('/tea', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/tea.html'))
})

app.get('/hotchoc', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/hot-choc.html'))
})

app.use(express.static('static'));
