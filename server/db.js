const { Pool } = require('pg');

//MySQL details
const pool = new Pool({
    user: 'theofacen',
    password: 'dest',
    host: 'localhost',
    database: 'sgbds7e4',
    port: 5432,
});

pool.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.error('Connection Failed!', err.stack);
});

module.exports = pool;
