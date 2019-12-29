const express = require('express')
const router = express.Router()
const { Ticket, validate } = require('../models/ticket-reservation')

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
    price,
    ticketType,
  } = req.body

  let ticket = new Ticket({
    name: name,
    lastname: lastname,
    movie: movie,
    showTime: showTime,
    seat: seat,
    price: price,
    ticketType: ticketType,
  })

  ticket = await ticket.save()
  res.send(ticket)
})

router.delete('/:id', async (req, res) => {
  const ticket = await Ticket.findByIdAndRemove(req.params.id)

  if (!ticket)
    return res.status(404).send('The Ticket with given ID was not found.')
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
    },
    { new: true }
  )

  if (!ticket)
    return res.status(404).send('The ticket with given ID was not found.')

  res.send(ticket)
})

module.exports = router
