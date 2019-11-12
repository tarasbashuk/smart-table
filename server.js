const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()



app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/test', function (req, res) {
 return res.send('Server running')
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))