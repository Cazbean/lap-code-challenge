// Server
const express = require('express')
const app = express()
const port = 5000
const path = require('path');

// Coffee results page 
// const results = [
//   {title: "Coffee - Wikipedia", content: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus."},
//   {title: "Costa Coffee: The Nation\'s Favourite Coffee Shop", content: "Costa is the Nation's Favourite coffee shop and the largest and fastest growing coffee shop chain in the UK." },
//   {title: "Coffee Beans | Blended Coffee | Whittard of Chelsea", content: "Whether you prefer whole coffee beans or freshly ground coffee, Whittard of Chelsea's selection of artisan coffees has something to suit your tastes."},
// ];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, '/results.html'))
})
