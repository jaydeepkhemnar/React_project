const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', //  MySQL user
    password: '', //  MySQL password
    database: 'jaydeep' //  database name
  });

  db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
  });

  app.post('/signup', ( req, res ) =>{
    const sql = "Insert INTO signup (username, email, password) Values (?,?,?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
      ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
      });
    });
  

app.listen(8080, ()=>{
    console.log("Listening.....");
})