const express = require("express");
const router = express.Router();
const db = require("../../db");

//게시글 불러오기
router.get("/",async(req,res)=>{
    const userId = 1; //현 사용자 id
    const query = "SELECT id,title,created_at,view FROM board_tbl WHERE user_id = ?";
    const [rows] = await db.query(query, [userId]);
    res.render("postManage",{ posts:rows });
});

//게시글 삭제
router.post("/delete",async(req,res)=>{
    const {postIds} = req.body; //삭제할 게시글 iD 배열
    const query = "DELETE FROM board_tbl WHERE id IN (?)";
    await db.query(query, [postIds]);
    res.redirect("/myPage");
});

module.exports = router;