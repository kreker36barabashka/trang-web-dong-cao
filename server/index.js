const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost/trang_web_dong_cao', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});
