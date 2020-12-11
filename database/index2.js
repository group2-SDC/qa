const { Pool } = require('pg')
const pool = new Pool({
    database: 'qa'
});
pool.connect();

const getAllQuestionsWithTripId = function (query, callback) {
    pool
        .query(query)
        .then((res) => {
            callback(res.rows);
        })
        .catch(e => {
            console.log(e);
        })
}

module.exports = {
    getAllQuestionsWithTripId
}