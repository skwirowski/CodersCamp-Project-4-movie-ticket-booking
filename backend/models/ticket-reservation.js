const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    lastname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    movie: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    showTime: {
      type: Date,
      required: true,
    },
    room: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    seat: {
        type: String,
        minlength: 2,
        maxlength: 4,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        minlength: 1,
        maxlength: 6,
        required: true,
    },
    ticketType: {
        type: String,
        required: true,
        enum:['Normalny','Ulgowy','Grupowy'],
    }
  });
  
ticketSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
      _id: this._id
    }, config.get('jwtPrivateKey'));
    return token;
  };

const Ticket = mongoose.model('Ticket', ticketSchema);

function validate(ticket) {
    const schema = {
      name: Joi.string()
        .min(2)
        .max(50)
        .required(),
      lastname: Joi.string()
        .min(2)
        .max(50)
        .required(),
      movie: Joi.string()
        .min(1)
        .max(255)
        .required(),
      showTime: Joi.date()
        .required(),
      seat: Joi.string()
        .min(2)
        .max(4)
        .required(),
      room: Joi.string()
        .min(2)
        .max(50)
        .required(),
      price: Joi.number()
        .required(),
      ticketType: Joi.string()
        .required()
        .valid('Normalny','Ulgowy','Grupowy')

    };
  
    return Joi.validate(ticket, schema);
  }
  exports.Ticket = Ticket;
  exports.validate = validate;