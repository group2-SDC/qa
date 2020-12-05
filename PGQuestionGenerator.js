const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = argv.lines || 10
const filename = argv.output || 'PGQuestions.csv'
const stream = fs.createWriteStream(filename)
const imageFilePath = 'https://ghrsea13-sdc-group2.s3-us-west-2.amazonaws.com/';
var j = 999;

const createPost = () => {
    const tripId = faker.random.number(100)
    const username = faker.internet.userName()
    const profilePic = imageFilePath + j + '.jpg'
    const date = faker.date.past().toDateString()
    const location = faker.address.city()
    const numContributions =faker.random.number(10)
    const numHelpfulVotes =faker.random.number(10)
    const question = faker.lorem.paragraph()
    j--
    if (j < 0) {
        j = 999
    };
    return `${tripId},${username},${profilePic},${date},${location},${numContributions},${numHelpfulVotes},${question}\n`

}

const startWriting = (writeStream, encoding, done) => {
    let i = lines
    function writing() {
        let canWrite = true
        do {
            i--
            let post = createPost()
            if (i === 0) {
                writeStream.write(post, encoding, done)
            } else {
                writeStream.write(post, encoding)
            }
        } while (i > 0 && canWrite)
        if (i > 0 && !canWrite) {
            writeStream.once('drain', writing);
        }
    }
    writing()
}
// stream.write(`ansUsername,ansProfilePic,ansDate,ansAnswer,likes\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
    stream.end()
})