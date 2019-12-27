const express = require('express')
const router = express.Router()
const { Movies, validation } = require('../models/movies')

router.get('/', async (req, res) => {
  const movies = await Movies.find()
  res.send(movies)
})

router.get('/:id', async (req, res) => {
  const movie = await Movies.findById(req.params.id)

  if (!movie)
    return res.status(400).send('Movie with the given ID was not found.')
  res.send(movie)
})

router.post('/', async (req, res) => {
  const { error } = validation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const {
    title,
    desc,
    category,
    duration,
    premiere,
    director,
    image,
  } = req.body
  const findTitle = await Movies.findOne({ title: new RegExp(title, 'i') })
  if (findTitle)
    return res.status(400).send('A movie with this title already exists.')

  let movie = new Movies({
    title: title,
    desc: desc,
    category: category,
    duration: duration,
    premiere: premiere,
    director: director,
    image: image,
  })

  movie = await movie.save()
  res.send(movie)
})

router.delete('/:id', async (req, res) => {
  const movie = await Movies.findByIdAndRemove(req.params.id)

  if (!movie)
    return res.status(404).send('Movie with the given ID was not found.')
  res.send(movie)
})

router.put('/:id', async (req, res) => {
  const { error } = validation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const {
    title,
    desc,
    category,
    duration,
    premiere,
    director,
    image,
  } = req.body
  const task = await Movies.findByIdAndUpdate(
    req.params.id,
    {
      title: title,
      desc: desc,
      category: category,
      duration: duration,
      premiere: premiere,
      director: director,
      image: image,
    },
    { new: true }
  )

  if (!task)
    return res.status(404).send('The movie with the given ID was not found.')

  res.send(task)
})

module.exports = router
