const moment = require('moment')
const express = require('express')
const router = express.Router()
const { Shows } = require('../models/shows')
const { Rooms } = require('../models/rooms')
const { Movies } = require('../models/movies')

router.get('/', async (req, res) => {
  const shows = await Shows.find()
  if (req.query['day'] && req.query['shows']) {
    const showsByDate = shows.filter(
      day => moment(day.dateTime).format('YYYY-MM-DD') === req.query['day']
    )
    const showsByName = showsByDate.filter(
      show => show.title === req.query['shows']
    )
    res.send(showsByName)
  } else if (req.query['shows']) {
    const showsByName = shows.filter(({title}) => new RegExp(`${req.query['shows']}`,'gi').test(title))
    res.send(showsByName)
  } else if (req.query['room']) {
    const showsByRoom = shows.filter(
      show => show.roomName === req.query['room']
    )
    res.send(showsByRoom)
  } else if (req.query['day']) {
    const showsByRoom = shows.filter(
      day => moment(day.dateTime).format('YYYY-MM-DD') === req.query['day']
    )
    res.send(showsByRoom)
  } else {
    res.send(shows)
  }
})

router.get('/:id', async (req, res) => {
  const show = await Shows.findById(req.params.id)

  if (!show)
    return res.status(400).send('Movie show with the given ID was not found.')
  res.send(show)
})

router.post('/', async (req, res) => {
  const { movie, room, dateTime } = req.body

  const movies = await Movies.findById(movie)
  const rooms = await Rooms.findById(room)

  const { title, desc, duration, category, director, premiere, image } = movies
  const { name: roomName, desc: roomDesc, seatsAvailable, seats } = rooms

  const findRoom = await Shows.find({
    roomName: new RegExp(roomName, 'i'),
  })
  const findDay = findRoom.filter(
    days =>
      moment(days.dateTime).format('MM-DD-YYYY HH:mm') ===
      moment(dateTime)
        .add(1, 'hours')
        .format('MM-DD-YYYY HH:mm')
  )

  if (findDay.length)
    return res
      .status(400)
      .send(
        `Movie show in ${roomName} at ${moment(dateTime).format(
          'DD.MM.YYYY HH:mm'
        )} already exists.`
      )

  let show = new Shows({
    title: title,
    desc: desc,
    category: category,
    duration: duration,
    premiere: premiere,
    director: director,
    image: image,
    roomName: roomName,
    roomDesc: roomDesc,
    seatsAvailable: seatsAvailable,
    seats: seats,
    dateTime: moment(dateTime).add(1, 'hours'),
  })

  show = await show.save()
  res.send(show)
})

router.delete('/:id', async (req, res) => {
  const show = await Shows.findByIdAndRemove(req.params.id)

  if (!show)
    return res.status(404).send('Movie show with the given ID was not found.')
  res.send(show)
})

router.put('/:id', async (req, res) => {
  const { movie, room, dateTime } = req.body

  const movies = await Movies.findById(movie)
  const rooms = await Rooms.findById(room)

  const { title, desc, duration, category, director, premiere, image } = movies
  const { name: roomName, desc: roomDesc, seatsAvailable, seats } = rooms

  const show = await Shows.findByIdAndUpdate(
    req.params.id,
    {
      title: title,
      desc: desc,
      category: category,
      duration: duration,
      premiere: premiere,
      director: director,
      image: image,
      roomName: roomName,
      roomDesc: roomDesc,
      seatsAvailable: seatsAvailable,
      seats: seats,
      dateTime: moment(dateTime).add(1, 'hours'),
    },
    { new: true }
  )

  if (!show)
    return res.status(404).send('Movie show with the given ID was not found.')

  res.send(show)
})

module.exports = router
