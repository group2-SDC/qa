// const { createNewData } = require('./seed.js')
// const { generateNRecords } = require('./seed.js')
// const app = require('./index.js')
// const { QuestionSet } = require('../database/index.js');
const sum = require('../tests/sum.js')

// describe('one run of createNewData should save 1 record to the database', () => {
//   test('adds 1 record to the database', () => {
//     createNewData(1);
//     console.log('QUESTION SET FIND: ', QuestionSet.find())
//     QuestionSet.find().exec((err, data) => {
//       if (err) {
//         console.log('HIT THIS ERROR: ', err)
//       } else {
//         expect(data.length.to.equal(1))
//       }
//     })
//   })
// })


describe('should add 1 and 5 to equal 6', () => {
  test('adds 1 + 5 to equal 6', () => {
    expect(sum(1, 5)).toBe(6);
  })
}
)