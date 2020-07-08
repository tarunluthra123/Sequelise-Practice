const { db, Student } = require('./model')
const { Op } = require("sequelize");

const task = async () => {
    try {
        await db.sync()
        const students = await Student.findAll({
            where: { age: { [Op.gt]: 100 } },
            order: [
                ['age', 'DESC'],
                ['name', 'ASC']
            ]
        })
        // console.log(students)
        students.forEach(s => console.log(`name:${s.dataValues.name}  age:${s.dataValues.age}`))

    } catch (e) {
        console.error(e)
    }
}

task()