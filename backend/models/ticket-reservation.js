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
    Movie: {
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
  