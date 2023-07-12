const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/luckynumber', ( req, res ) => {
  const nomor = Math.floor(Math.random() * 100)
  res.send(`${nomor}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})