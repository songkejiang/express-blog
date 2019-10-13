
const env = process.env.NODE_ENV

let mysql_conf

if(env==='dev') {
  mysql_conf = {
    host: '127.0.0.1',
    user: 'root',
    password: 'Jks123456', 
    port: '3306',
    database: 'test'
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
}

module.exports = {
  mysql_conf
}
