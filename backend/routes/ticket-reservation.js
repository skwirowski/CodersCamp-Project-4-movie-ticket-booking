const express = require('express')
const router = express.Router()
const { Tickets, validation } = require('../models/ticket-reservation')

router.get('/', async (req, res) => {
  const tickets = await Tickets.find()
  res.send(tickets)
})

router.get('/:id', async (req, res) => {
  const ticket = await Tickets.findById(req.params.id)

  if (!ticket)
    return res.status(400).send('The Ticket with given ID was not found.')
  res.send(ticket)
})

router.post('/', async (req, res) => {
  const { error } = validation(req.body)
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

  let ticket = new Tickets({
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
  const ticket = await Tickets.findByIdAndRemove(req.params.id)

  if (!ticket)
    return res.status(404).send('The Ticket with given ID was not found.')
  res.send(ticket)
})

router.put('/:id', async (req, res) => {
  const { error } = validation(req.body)
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
  const ticket = await Tickets.findByIdAndUpdate(
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
