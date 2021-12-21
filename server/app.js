const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '20pca114@J',
  database: 'attendance',
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'INSERT INTO login (username,password) values(?,?)',
    [username, password],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'select * from login where username=? AND password=?',
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Wrong User Name and Password' });
      }
    }
  );
});

app.listen(3002, () => {
  console.log('Server Running');
});
