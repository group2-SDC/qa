const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = argv.lines || 10000000
const filename = argv.output || 'PGAnswers2.csv'
const stream = fs.createWriteStream(filename)
const imageFilePath = 'https://ghrsea13-sdc-group2.s3-us-west-2.amazonaws.com/';
var j = 0;

const createPost = () => {
  const ansUsername = faker.internet.userName()
  const ansProfilePic = imageFilePath + j + '.jpg'
  const ansDate = faker.date.past().toDateString()
  const ansAnswer = faker.lorem.paragraph()
  const likes = faker.random.number(10)
  const questionId = faker.random.number({
    'min': 1,
    'max': 10000000
});
  j++
  if (j > 999) {
    j = 0
  };
  return `${questionId},${ansUsername},${ansProfilePic},${ansDate},${ansAnswer},${likes}\n`

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