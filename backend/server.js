const express = require('express');
const db = require('./config/db');

require('dotenv').config();

const app = express();
app.use(express.json());

// MySQL 연결 테스트
app.get('/api/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * from tbl_user');
        res.json({ message: 'Database connected!', result: rows[0].result });
    } catch (error) {
        console.error('Database connection failed:', error.message);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
