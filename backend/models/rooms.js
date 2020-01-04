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

const Rooms = mongoose.model(
  'Rooms',
  new mongoose.Schema({
    name: {
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
    seatsAvailable: {
      type: Number,
      required: true,
      min: 1,
    },
    seats: {
      type: [seatsSchema],
    },
  })
)

const validationRoom = room => {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    desc: Joi.string()
      .min(3)
      .required(),
    seatsAvailable: Joi.number().required(),
    seats: Joi.array(),
  }
  return Joi.validate(room, schema)
}

const validationSeat = seat => {
  const schema = {
    num: Joi.number().required(),
    row: Joi.string()
      .min(1)
      .max(2)
      .required(),
    code: Joi.string()
      .min(2)
      .max(3),
    checked: Joi.boolean().required(),
  }
  return Joi.validate(seat, schema)
}

exports.Rooms = Rooms
exports.validationRoom = validationRoom
exports.validationSeat = validationSeat
