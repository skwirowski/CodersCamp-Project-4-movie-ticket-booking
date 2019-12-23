const config = require('config')
const mongoose = require('mongoose')
const express = require('express')

const app = express()

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined.')
  process.exit(1)
}

mongoose
  .connect('mongodb://localhost/cinema', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB.'))
  .catch(err => console.error('Could not connect to MongoDB.' + err))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

app.use(express.json())
