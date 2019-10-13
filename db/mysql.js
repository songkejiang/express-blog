const mysql = require('mysql')
const {mysql_conf} = require('../conf/db')
// console.log(mysql_conf)
const con = mysql.createConnection(mysql_conf)
con.connect()
// const sql = 'select * from users;'
// const sql = 'insert into users(username, password, realname) value("王五", "11111","王二狗") '
// con.query(sql, (error, result) => {
//   if(error) {
//     return console.log(error)
//   }
//   console.log(result)
// })
function exec (sql) {
  console.log('-------------',sql)
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return 
      }
      // console.log(result)
      resolve(result)
    })
  })
}
module.exports = {
  exec,
  escape: mysql.escape
}
// con.end()