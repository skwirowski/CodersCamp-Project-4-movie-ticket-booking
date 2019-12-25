const mongoose = require('mongoose')
const express = require('express')
const movies = require('./routes/movies')

const app = express()

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
app.use('/api/movies', movies)
