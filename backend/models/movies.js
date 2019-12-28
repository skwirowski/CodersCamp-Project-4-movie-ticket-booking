const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const Movies = mongoose.model(
  'Movies',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlenght: 255,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      minlength: 3,
      maxlenght: 255,
      trim: true,
    },
    category: {
      type: Array,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    premiere: {
      type: Date,
      required: true,
    },
    director: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
    },
  })
)

const validation = movie => {
  const schema = {
    title: Joi.string()
      .min(3)
      .max(255)
      .required(),
    desc: Joi.string()
      .min(3)
      .max(255)
      .required(),
    category: Joi.array().required(),
    duration: Joi.number().required(),
    premiere: Joi.date().required(),
    director: Joi.array().required(),
    image: Joi.string(),
  }
  return Joi.validate(movie, schema)
}

exports.Movies = Movies
exports.validation = validation
