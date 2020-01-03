const mongoose = require('mongoose')
const express = require('express')
const movies = require('./routes/movies')
const rooms = require('./routes/rooms')
const user = require('./routes/user')
const login = require('./routes/login')
const shows = require('./routes/shows')
const ticket = require("./routes/ticket-reservation")
//const config = require('config');


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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
app.use(express.json())
app.use('/api/movies', movies)
app.use('/api/rooms', rooms)
app.use('/api/users', user)
app.use('/api/login', login)
app.use('/api/screenings', shows)
app.use("/api/ticket", ticket)
