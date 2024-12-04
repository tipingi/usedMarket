const express = require("express");
const router = express.Router();
const db = require("../../db");

//포인트 화면
router.get("/",async(req,res)=>{
    const userId = 1; //현 사용자 id
    const query = "SELECT points FROM user_tbl WHERE id = ?";
    const [rows] = await db.query(query, [userId]);
    res.render("pointManage",{ points: rows[0].points });
});

//포인트 충전
router.post("/charge",async(req,res)=>{
    const {amount}=req.body; //충전할 포인트양
    const userId=1;
    const query = "UPDATE user_tbl SET points = points + ? WHERE id = ?";
    await db.query(query, [amount, userId]);
    res.redirect("/myPage");
});

module.exports = router;