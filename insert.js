const { db, Student } = require('./model')

const sampleNames = ['Dean', 'Sam', 'Lucifer', 'Castiel', 'Chuck', 'Amara', 'Bobby']
const sampleAges = [35, 32, 5621, 3476, 10000, 10005, 64]

const task = async () => {
    try {
        await db.sync()
        for (let i = 0; i < sampleNames.length; i++) {
            await Student.create({
                name: sampleNames[i],
                age: sampleAges[i]
            })
        }

    } catch (err) {
        console.error(err)
    }
}

task()