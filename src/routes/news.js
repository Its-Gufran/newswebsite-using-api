const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('/', async(req, res) => {
    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=d9cd719c6bb2436891e1915cef8f7545')
        
        res.render('news', { articles : newsAPI.data.articles})
        console.log(newsAPI.data)
    } catch(err) {
        if(err.response) {
            res.render('news', { articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('news', { articles : null})
            console.log(err.request)
        } else {
            res.render('news', { articles : null})
            console.log('Error', err.message)
        }
    }

})

newsRouter.post('/', async(req, res) => {
    let query = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=d9cd719c6bb2436891e1915cef8f7545`)
        
        res.render('newsQuery', { articles : newsAPI.data.articles})
        console.log(newsAPI.data)
    } catch(err) {
        if(err.response) {
            res.render('newsQuery', { articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('newsQuery', { articles : null})
            console.log(err.request)
        } else {
            res.render('newsQuery', { articles : null})
            console.log('Error', err.message)
        }
    }

})

module.exports = newsRouter