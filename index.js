const express = require('express')
const app = express()
const port = 3000

// app.get('/', function(req, res) {
//   return res.send('Hello World!')
// })

//arrow funtion
app.get('/hieu', (req, res) => {
   res.send('Hello World  sss!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})