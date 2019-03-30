const express = require ('express')
const path = require ('path')

const app = express ()
const port = 3000

app.listen(port, () => console.log('APP IS LISTENING'))

app.use('/', express.static(path.join(__dirname, './client/dist')))

app.get('/', (req, res) => {
  res.send()
})