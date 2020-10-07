const express = require('express')
const app = express()

const {
    db,
    Tasks
} = require('./db')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/todo', express.static(__dirname + '/public'))

app.get('/todos', async (req, res) => {
    let items = await Tasks.findAll()
    res.send(items)
})
app.post('/todo',
    async (req, res) => {
        let newItem = await Tasks.create({
            name: req.body.taskname,
            description: req.body.description
        })
        res.send('')
    })
app.post('/done', async (req, res) => {
    await Tasks.update({
        done: 1
    }, {
        where: {
            id: req.body.id
        }
    })
    res.send('')
})

app.post('/delete', async (req, res) => {
    await Tasks.destroy({
        where: {
            id: req.body.id
        }
    })
    console.log('sef')
    res.send('')
})
app.post('/todo',
    async (req, res) => {
        let newItem = await Tasks.create({
            name: req.body.taskname,
            name1: req.body.taskname,
            description: req.body.description
        })
        res.send('')
    })

db.sync()
    .then(() => {
        app.listen(5111, () => {
            console.log('Server Started')
        })
    })