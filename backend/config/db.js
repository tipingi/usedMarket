const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'usedmarket',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Promise 기반 연결 (async/await 지원)
const promisePool = pool.promise();

module.exports = promisePool;
