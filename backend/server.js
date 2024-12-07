const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/MyPage'); // MyPage

require('dotenv').config(); // 환경변수 설정

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(cors()); // CORS 설정 (모든 요청 허용)
app.use(express.json()); // JSON 요청 바디 파싱

// 라우트 설정
app.use('/api/users', userRoutes); // /api/users 경로에서 사용자 라우트 처리

// 기본 라우트 (서버 상태 확인용)
app.get('/', (req, res) => {
  res.send('Server is running. Welcome to UsedMarket API.');
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
