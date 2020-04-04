const express = require('express')
const router = express.Router()
const { data } = require('../data.json')
const { projects } = data.projects

router.get('/', (req, res) => {
    const templateData = projects
    res.render('index', templateData)
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/project/:id', (req, res) => {
    const { id } = req.params
    const { project } = projects[id]
    res.render('project', project)

})

module.exports = router