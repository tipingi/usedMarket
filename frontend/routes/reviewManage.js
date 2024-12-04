const express = require("express");
const router = express.Router();
const db = require("../../db");

//리뷰 불러오기
router.get("/",async(req,res)=>{
    const userId = 1; //현 사용자 id
    const query = "SELECT id, review_text, created_at FROM review_tbl WHERE user_id = ?";
    const [rows] = await db.query(query,[userId]);
    res.render("reviewManage",{reviews:rows});
});

module.exports = router;