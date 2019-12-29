const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const seatsSchema = new mongoose.Schema({
  num: {
    type: Number,
    required: true,
    min: 1,
    max: 99,
  },
  row: {
    type: String,
    required: true,
    minlength: 1,
    maxlenght: 2,
    trim: true,
  },
  code: {
    type: String,
    minlength: 2,
    maxlength: 4,
    trim: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
})

const Shows = mongoose.model(
  'Shows',
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
    roomName: {
      type: String,
      required: true,
      minlength: 3,
      maxlenght: 255,
      trim: true,
    },
    roomDesc: {
      type: String,
      required: true,
      minlength: 3,
      maxlenght: 255,
      trim: true,
    },
    seatsAvailable: {
      type: Number,
      required: true,
      min: 1,
    },
    seats: {
      type: [seatsSchema],
    },
    dateTime: {
      type: Date,
      required: true,
    },
  })
)

const validationShow = show => {
  const schema = {
    dateTime: Joi.date().required(),
  }
  return Joi.validate(show, schema)
}

exports.Shows = Shows
exports.validation = validationShow
