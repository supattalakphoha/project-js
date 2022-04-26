const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())

app.get('/sleep', (req, res) => {
  res.status(200).json({
    message: 'Sleep',
  })
})

app.get('/users', (req, res) => {
  res.status(200).json({
    message: 'jet',
  })
})

app.get('/usersall', (req, res) => {
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'jet',
  })

  con.connect(function (err) {
    if (err) throw err
    console.log('You are connected!')
    var sql = 'select * from users'
    con.query(sql, function (err, result) {
      if (err) console.log(err)
      console.log(result)
    })
    con.end()
  })

  res.status(200).json({
    message: 'jet',
  })
})
app.get('/userList', (req, res) => {
  var userList = []
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'jet',
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
  // console.log('-------------------------------------------------')
  // console.log(userList)
  // res.status(200).json({
  //   message: 'เรียกข้อมูลสำเร็จ',
  //   data: userList,
  // })
})
app.use(express.static(path.join(__dirname, '../fms-web-main/projectjs/dist')))
app.listen(3000, (err) => {
  err
    ? console.log('Fail to Start Server')
    : console.log('Server start at 3000')
})
