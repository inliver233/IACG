<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: '无token,授权失败' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token无效' });
  }
};
<<<<<<< HEAD
=======
// server/middleware/auth.js

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  console.log('Auth middleware triggered (Demo mode: Skipping authentication)');
  
  req.user = {
    id: 1,
    username: 'DemoUser'
  };
  
  next();
};

module.exports = auth;
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
