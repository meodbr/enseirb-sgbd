const { Pool } = require('pg');

//MySQL details
const pool = new Pool({
    user: 'theofacen',
    password: 'zizi',
    host: 'localhost',
    database: 'sgbd',
    port: 5432,
});

pool.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.error('Connection Failed!', err.stack);
});

module.exports = pool;
