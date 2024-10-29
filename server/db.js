<<<<<<< HEAD
<<<<<<< HEAD
=======
// server/db.js

>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcrypt');

const dbPath = path.resolve(__dirname, 'acg_community.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating users table', err);
      } else {
        console.log('Users table created or already exists.');
      }
    });
  }
});

function registerUser(username, email, password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hash], function(err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        });
      }
    });
  });
}

function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  registerUser,
  getUserByUsername
=======
function getUserById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

module.exports = {
  registerUser,
  getUserByUsername,
  getUserById
>>>>>>> 47bbfa4 (调整界面和ui)
=======
module.exports = {
  registerUser,
  getUserByUsername
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
};
