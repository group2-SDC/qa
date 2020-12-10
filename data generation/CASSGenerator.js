const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = argv.lines || 10000000
const filename = argv.output || 'CASS.csv'
const stream = fs.createWriteStream(filename)
const imageFilePath = 'https://ghrsea13-sdc-group2.s3-us-west-2.amazonaws.com/';
var j = 0;
var k = 999;
var l= 0

function randomDateGenerator(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}


const createPost = () => {
    const id = l
    const username = faker.internet.userName()
    const tripId = faker.random.number(10000000)
    const profilePic = imageFilePath + j + '.jpg'
    const date = "" + randomDateGenerator(new Date(2012, 0, 1), new Date())
    const location = faker.address.city()
    const numContributions =faker.random.number(10)
    const numHelpfulVotes =faker.random.number(10)
    const question = faker.lorem.paragraph()
    const ansUsername = faker.internet.userName()
    const ansProfilePic = imageFilePath + k + '.jpg'
    const ansDate = randomDateGenerator(new Date(2012, 0, 1), new Date())
    const ansAnswer = ""+faker.lorem.paragraph()
    const anslikes = faker.random.number(10)
    l++
    j++
    k--
    if (j > 999) {
        j = 0
    };
    if (k === 0) {
        k = 999
    }
    return `${id}|[${ansAnswer}]|[${ansDate}]|[${anslikes}]|[${ansProfilePic}]|[${ansUsername}]|${date}|${location}|${numContributions}|${numHelpfulVotes}|${profilePic}|${question}|${tripId}|${username}\n`
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