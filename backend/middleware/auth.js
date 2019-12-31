const config = require('config');
const jwt = require('jsonwebtoken');

function auth(request, response, next) {
  const token = request.header('x-auth-token');
  if (!token) return response.status(401).send('Access denied. No token provided.');
  try {
    const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
    request.user = decodedPayload;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
}
module.exports = auth;
