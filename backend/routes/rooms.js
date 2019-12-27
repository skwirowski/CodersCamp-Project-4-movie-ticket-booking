const express = require('express')
const router = express.Router()
const { Rooms, validationRoom, validationSeat } = require('../models/rooms')
const errorIdMsg = 'Room with the given ID was not found.'

router.get('/', async (req, res) => {
  const rooms = await Rooms.find()
  res.send(rooms)
})

router.get('/:id', async (req, res) => {
  const rooms = await Rooms.findById(req.params.id)

  if (!rooms) return res.status(400).send(errorIdMsg)
  res.send(rooms)
})

router.post('/', async (req, res) => {
  const { error } = validationRoom(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const { name, desc, seatsAvailable, seats } = req.body
  const findname = await Rooms.findOne({ name: new RegExp(name, 'i') })
  if (findname)
    return res.status(400).send('A room with this name already exists.')

  let rooms = new Rooms({
    name: name,
    desc: desc,
    seatsAvailable: seatsAvailable,
    seats: seats,
  })

  rooms = await rooms.save()
  res.send(rooms)
})

router.delete('/:id', async (req, res) => {
  const rooms = await Rooms.findByIdAndRemove(req.params.id)

  if (!rooms) return res.status(404).send(errorIdMsg)
  res.send(rooms)
})

router.put('/:id', async (req, res) => {
  const { error } = validationRoom(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const { name, desc, seatsAvailable } = req.body
  const task = await Rooms.findByIdAndUpdate(
    req.params.id,
    {
      name: name,
      desc: desc,
      seatsAvailable: seatsAvailable,
    },
    { new: true }
  )

  if (!task) return res.status(404).send(errorIdMsg)

  res.send(task)
})

router.get('/:id/seats', async (req, res) => {
  const rooms = await Rooms.findById(req.params.id)

  if (!rooms) return res.status(400).send(errorIdMsg)
  res.send(rooms.seats)
})

router.post('/:id/seats', async (req, res) => {
  const { error } = validationSeat(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const { num, row, checked } = req.body

  const findSeat = await Rooms.find({
    _id: req.params.id,
    seats: { $elemMatch: { code: `${num}${row}` } },
  })
  if (findSeat.length) return res.status(400).send('This seat already exists.')

  const seat = {
    num: num,
    row: row,
    code: `${num}${row}`,
    checked: checked,
  }

  const addSeat = await Rooms.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { seats: seat } },
    { new: true }
  )

  res.send(addSeat)
})

router.put('/:id/seats/:ids', async (req, res) => {
  const { num, row, checked } = req.body

  const editSeat = await Rooms.update(
    { _id: req.params.id, 'seats._id': req.params.ids },
    {
      $set: {
        'seats.$.num': num,
        'seats.$.row': row,
        'seats.$.code': `${num}${row}`,
        'seats.$.checked': checked,
      },
    }
  )
  console.log(editSeat)
  res.send(editSeat)
})

router.delete('/:id/seats/:ids', async (req, res) => {
  const removeSeat = await Rooms.findByIdAndUpdate(
    { _id: req.params.id },
    { $pull: { seats: { _id: req.params.ids } } },
    { new: true }
  )

  if (!removeSeat) return res.status(404).send(errorIdMsg)
  res.send(removeSeat)
})

module.exports = router
