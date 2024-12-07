const express = require('express');
const router = express.Router();
const userModel = require('../models/MyPage');

// 사용자 정보 조회 라우트
router.get('/mypage/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// 사용자 정보 수정 라우트
router.put('/mypage/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedData = req.body; // 클라이언트에서 전달된 수정할 데이터
        const result = await userModel.updateUser(userId, updatedData);

        if (result === 0) {
            return res.status(404).json({ message: 'User not found or no changes made' });
        }
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
