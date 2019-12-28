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
      type: Number,
      required: true,
    },
    seat: {
        type: String,
        minlength: 2,
        maxlength: 3,
        required: true,
        unique: true,
    },
    price: {
        type: mongoose.Types.Decimal128,
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

function validateTicket(ticket) {
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
      showTime: Joi.string()
        .required(),
      seat: Joi.string()
        .min(2)
        .max(3)
        .required()
        .unique(),
      price: Joi.mongoose.Types.Decimal128()
        .min(1)
        .max(6)
        .required(),
      ticketType: Joi.string()
        .required()
        .valid('Normalny','Ulgowy','Grupowy')

    };
  
    return Joi.validate(ticket, schema);
  }
  exports.Ticket = Ticket;
  exports.validate = validateTicket;