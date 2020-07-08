const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1', 'sampleuser1', 'samplepass1', {
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(2),
        default: -1,
        allowNull: false
    }
})

// task()

db.sync()
    .then(() => console.log('Database synchronised'))
    .catch(console.error)

module.exports = {
    db, Student
}