// backend/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001; // Chọn một port cho backend

// Sử dụng CORS middleware
app.use(cors());

// Tạo một API endpoint đơn giản
app.get('/api/message', (req, res) => {
    // Trả về một object JSON
    res.json({ message: 'Xin chào từ server Node.js! 👋' });
});

app.get('/api/getList', (req, res) => {
    res.json({ list: ['Item 1', 'Item 2', 'Item 3'] });
});

// Lắng nghe ở port đã định nghĩa
app.listen(PORT, () => {
    console.log(`🚀 Server backend đang chạy tại http://localhost:${PORT}`);
});