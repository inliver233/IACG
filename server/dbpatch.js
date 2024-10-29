// 导入所需模块
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcrypt');

// 设置数据库路径
const dbPath = path.resolve(__dirname, 'acg_community.db');


// 创建数据库连接
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('打开数据库时出错', err);
  } else {
    console.log('已连接到 SQLite 数据库。');
    initializeTables();
  }
});

// 初始化数据库表
function initializeTables() {
  db.serialize(() => {
    // 创建用户表
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('创建用户表时出错', err);
      } else {
        console.log('用户表已创建或已存在。');
      }
    });

    // 创建帖子表
    db.run(`CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      category TEXT NOT NULL,
      imageUrl TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('创建帖子表时出错', err);
      } else {
        console.log('帖子表已创建或已存在。');
      }
    });

    console.log("数据库表初始化完成");
  });
}

// 注册用户函数
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

// 根据用户名获取用户信息
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

// 导出数据库操作函数和数据库连接
module.exports = {
  db,
  registerUser,
  getUserByUsername
};
