const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// var host = process.env.DB_HOST || 'localhost'
// var user = process.env.DB_USER || 'root'
// var password = process.env.DB_PASS || '1234'
// var database = process.env.DB_NAME || 'jet'

const host = 'localhost'
var user = process.env.DB_USER || 'root'
var password = process.env.DB_PASS || '1234'
var database = process.env.DB_NAME || 'jet'

app.get('/sleep', (req, res) => {
  res.status(200).json({
    message: 'Sleep',
  })
})

app.get('/userList', (req, res) => {
  var userList = []
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'fms',
    // host: 'localhost',
    // user: 'root',
    // password: '1234',
    // database: 'fms',
  })

  con.connect(function (err) {
    if (err) throw err
    console.log('You are connected =================================!')
    var sql = 'select * from users'
    con.query(sql, function (err, result) {
      /* if (err) console.log(err)
      console.log(result)
      userList = result*/
      if (err) {
        console.log(err)
      } else {
        console.log(result)
        console.log(result[0])
        userList = result
        console.log(userList)
        res.status(200).json({
          message: 'เรียกข้อมูลสำเร็จ',
          data: userList,
        })
      }
    })
    con.end()
  })
})

app.get('/login/:username/:password', (req, res) => {
  var un = req.params.username
  var pw = req.params.password
  console.log(un, pw)
  var user = {}
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'fms',
    // host: 'localhost',
    // user: 'root',
    // password: '1234',
    // database: 'fms',
  })

  con.connect(function (err) {
    if (err) throw err
    console.log('You are connected =================================!')
    var sql =
      "select * from users where username = '" +
      un +
      "' and password = '" +
      pw +
      "'"

    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
        console.log(result[0])
        user = result[0]
        console.log(user)
        res.status(200).json({
          message: 'เรียกข้อมูลสำเร็จ',
          data: user,
        })
      }
    })
    con.end()
  })
})

app.post('/createUser', (req, res) => {
  console.log('-----------------------------------------')
  console.log(req.body)
  var reqObj = req.body
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'fms',
    // host: 'localhost',
    // user: 'root',
    // password: '1234',
    // database: 'fms',
  })

  con.connect(function (err) {
    if (err) throw err
    console.log('You are connected =================================!')

    var sql =
      'insert into users values(' +
      "'" +
      reqObj.id +
      "', " +
      "'" +
      reqObj.firstName +
      "', " +
      "'" +
      reqObj.lastName +
      "', " +
      "'" +
      reqObj.email +
      "', " +
      "'" +
      reqObj.phoneName +
      "', " +
      "'" +
      reqObj.userName +
      "', " +
      "'" +
      reqObj.password +
      "', 1,0" +
      ')'
    console.log(sql)
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
        console.log(result[0])
        user = result[0]
        console.log(user)
        res.status(200).json({
          message: 'เรียกข้อมูลสำเร็จ',
          data: user,
        })
      }
    })
    con.end()
  })
})

app.use(
  express.static(path.join(__dirname, '../../fms-web-main/projectjs/dist')),
)
app.listen(3000, (err) => {
  err
    ? console.log('Fail to Start Server')
    : console.log('Server start at 3000')
})
