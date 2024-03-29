
const env = process.env.NODE_ENV

let mysql_conf
let redis_conf
if(env==='dev') {
  mysql_conf = {
    host: 'localhost',
    user: 'root',
    password: 'Jks123456',
    port: '3306',
    database: 'test'
  }
  redis_conf = {
    port: 6379,
    host: '127.0.01'
  }
}

if(env==='production') {
  mysql_conf = {
    host: '127.0.0.1',
    user: 'root',
    password: 'jksa123456',
    port: '3306',
    database: 'myblog'
  }
  redis_conf = {
    port: 6379,
    host: '127.0.01'
  }
}

module.exports = {
  mysql_conf,
  redis_conf
}
