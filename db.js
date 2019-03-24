const Sequelize = require('sequelize')
const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + `/tasks.db`
})

const Tasks = db.define('tasks', {
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = {
    db,
    Tasks
}