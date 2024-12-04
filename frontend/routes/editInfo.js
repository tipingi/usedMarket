const express = require("express");
const router = express.Router();
const db = require("../../db");

//내 정보 불러오기
router.get("/",async(req,res)=>{
    const userId = 1; //현재 사용자 id(테스트용)
    const query = 'SELECT name, email, phone, address FROM user_tbl WHERE id = ?';
    const [rows] = await db.query(query,[userId]);
    res.render("editInfo",{userInfo: rows[0]});
});

//정보 업데이트
router.post("/",async(req,res)=>{
    const {name, email, phone, address}=req.body;
    const userId=1; //현 사용자 ID
    const query = `UPDATE user_tbl
    SET name = ?, email = ?, phone = ?, address = ?
    WHERE id = ?`;
    await db.query(query,[name,email,phone,address,userId]);
    res.redirect("/myPage");
});

module.exports = router;