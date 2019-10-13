const {exec, escape} = require('../db/mysql')
const {genPassword} = require('../utils/cryp')
const login = (userName, password)  => {
  userName = escape(userName)
  password = escape(password) //防止sql注入
  password = genPassword(password)
  let sql = `
    select username, realname from users where username=${userName} and password=${password}
  `
  return exec(sql).then((rows)=>{
    console.log(rows)
    return  rows[0] || {}
  })
  
}

module.exports = {
  login
}