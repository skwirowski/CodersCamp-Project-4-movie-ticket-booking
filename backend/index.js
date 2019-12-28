const mongoose = require('mongoose')
const express = require('express')
const movies = require('./routes/movies')
const rooms = require('./routes/rooms')
<<<<<<< HEAD
const user = require('./routes/user')
const login = require('./routes/login')
const shows = require('./routes/shows')
=======
const user = require("./routes/user")
const login = require("./routes/login")
//const config = require('config');

>>>>>>> Minor improvements

const app = express()

mongoose
  .connect('mongodb://localhost/cinema', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB.'))
  .catch(err => console.error('Could not connect to MongoDB.' + err))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

app.use(express.json())
app.use('/api/movies', movies)
app.use('/api/rooms', rooms)
app.use('/api/users', user)
app.use('/api/login', login)
app.use('/api/screenings', shows)
