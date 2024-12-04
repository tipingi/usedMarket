const express = require('express');
const router = express.Router();
const db = require("../../db"); // DB 연결 파일이 필요하다고 가정

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // 유저 정보
    const [userInfo] = await db.query("SELECT name, intro FROM user_tbl WHERE id = ?", [userId]);

    // 판매 내역
    const [sellHistory] = await db.query(`
      SELECT product_name, created_at 
      FROM transaction_tbl 
      WHERE seller_id = ? 
      ORDER BY created_at DESC 
      LIMIT 10`, 
      [userId]
    );

    // 구매 내역
    const [buyHistory] = await db.query(`
      SELECT product_name, created_at 
      FROM transaction_tbl 
      WHERE buyer_id = ? 
      ORDER BY created_at DESC 
      LIMIT 10`, 
      [userId]
    );

    res.render("mypage", { userInfo, sellHistory, buyHistory });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
