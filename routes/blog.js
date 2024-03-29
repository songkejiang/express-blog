const express = require('express')
const router = express.Router();
const  { getList, getDetail, newBlog, upDataBlog, deleteBlog } = require('../controller/blog') 
const  { SuccessModel, ErrorModel } = require('../model') 
router.get('/list', (req, res, next) => {
    const author = req.query.author || ''
    const keyWords = req.query.keyWords || ''
    return getList(author, keyWords).then(listData =>{
      // console.log(JSON.stringify(new SuccessModel(listData)))
      // return new SuccessModel(listData)
      res.json(new SuccessModel(listData))
    })
})

module.exports = router