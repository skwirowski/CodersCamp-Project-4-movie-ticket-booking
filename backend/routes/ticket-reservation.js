const express = require('express')
const router = express.Router()
const { Ticket, validate } = require('../models/ticket-reservation')
const { Shows } = require('../models/shows')
const moment = require('moment')


router.get('/', async (req, res) => {
  const tickets = await Ticket.find()
  res.send(tickets)
})

router.get('/:id', async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket)
    return res.status(400).send('The Ticket with given ID was not found.')
  res.send(ticket)
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(404).send(error.details[0].message)

  const {
    name,
    lastname,
    movie,
    showTime,
    seat,
    room,
    price,
    ticketType,
  } = req.body

  const shows = await Shows.find({
    title: movie,
    roomName: room,
    dateTime: `${showTime}:00.000Z`,
  })

  let objSeat
  let showId

  shows.map(show => {
    showId = show._id
    const findResult = show.seats.find(({ code }) => code === seat)
    if (findResult) {
      objSeat = findResult
    }
  })

  await Shows.updateOne(
    { _id: showId, 'seats._id': objSeat._id },
    {
      $set: {
        'seats.$.num': objSeat.num,
        'seats.$.row': objSeat.row,
        'seats.$.code': objSeat.code,
        'seats.$.checked': !objSeat.checked,
      },
    }
  )

  let ticket = new Ticket({
    name: name,
    lastname: lastname,
    movie: movie,
    showTime: moment(showTime).add(1, 'hours'),
    room: room,
    seat: seat,
    price: price,
    ticketType: ticketType,
  })

  ticket = await ticket.save()
  res.send(ticket)
})

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const {
    name,
    lastname,
    movie,
    showTime,
    seat,
    price,
    ticketType,
    room,
  } = req.body
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    {
      name: name,
      lastname: lastname,
      movie: movie,
      showTime: showTime,
      seat: seat,
      price: price,
      ticketType: ticketType,
      room: room,
    },
    { new: true }
  )

  if (!ticket)
    return res.status(404).send('The ticket with given ID was not found.')

  res.send(ticket)
})

module.exports = router
