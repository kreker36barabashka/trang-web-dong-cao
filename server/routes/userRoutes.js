const express = require('express');
const router = express.Router();

// Tạo một số endpoints cơ bản
router.get('/', (req, res) => {
  res.send('Lấy thông tin người dùng');
});
router.post('/', (req, res) => {
  res.send('Thêm người dùng mới');
});

module.exports = router;
