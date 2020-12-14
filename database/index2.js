const { Pool } = require('pg')
const pool = new Pool({
    database: 'qa'
});
pool.connect();

const queryDB = function (query, callback) {
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
    queryDB,
    
}