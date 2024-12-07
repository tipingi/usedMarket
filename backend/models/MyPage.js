const db = require('../config/db');

// 사용자 정보 조회
exports.getUserById = async (userId) => {
  const [rows] = await db.query('SELECT * FROM tbl_user WHERE user_id = ?', [userId]);
  return rows[0]; // 사용자 정보 반환
};

// 사용자 정보 수정
exports.updateUser = async (userId, { name, email, phone_no, post_code, address }) => {
  const [result] = await db.query(
    'UPDATE tbl_user SET name = ?, email = ?, phone_no = ?, post_code = ?, address = ? WHERE user_id = ?',
    [name, email, phone_no, post_code, address, userId]
  );
  return result.affectedRows; // 수정된 행 수 반환
};