const auth = require('../middleware/auth');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
  const users = await User.find().select('-password').select('-_id').sort();
  res.send(users);
});

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({
    email: req.body.email
  });

  if (user) return res.status(400).send('User already registered.');
  user = new User(_.pick(req.body, ['name', 'lastname', 'email', 'password']));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'lastname', 'email']));
});

router.put('/:id', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(
    req.params.id, {
      name: req.body.name,
      lastname: req.body.lastname
    }, { new: true }
  );

  if (!user) return res.status(404).send('The user with given ID was not found.');

  res.send(user);
});

module.exports = router;