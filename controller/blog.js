const {exec} = require('../db/mysql')
const xss = require('xss')
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author = '${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  // sql += `order by createtime desc`
  return exec(sql)
} 

const getDetail = (id) => {
  let sql = `select * from blogs where id=${id}`
  return exec(sql).then((rows)=>{
    console.log(rows)
    return rows[0]
  })
}

const newBlog = (postData) => {
  let {title, author, content} = postData
  let createTime = Date.now()
  console.log('----',postData)
  const sql = `
    insert into blogs (title, content, createtime, author) values ('${xss(title)}', '${xss(content)}', ${xss(createTime)}, '${xss(author)}')
  `
  return exec(sql).then((res) => {
    // console.log(res)
    return {
      id: res.insertId
    }
  })
}

const upDataBlog = ((id, blogData) => {
  const {title, content} = blogData
  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`
  return exec(sql).then((data) => {
    if (data.affectedRows>0) {
      return true
    } else {
      return false
    }
  })
})

const deleteBlog = ((id) => {
  console.log('postData', id)
  let author = 'jasen'
  let sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(delData =>{
    if (delData.affectedRows>0) {
      return true
    } else {
      return false
    }
  })
})
module.exports = {
  getList,
  getDetail,
  newBlog,
  upDataBlog,
  deleteBlog
}