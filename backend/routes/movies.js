const express = require('express')
const router = express.Router()

const movies = [
  { id: 1, name: 'Movie 1' },
  { id: 2, name: 'Movie 2' },
  { id: 3, name: 'Movie 3' },
]

router.get('/', (req, res) => {
  res.send(movies)
})

module.exports = router
